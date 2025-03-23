import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UploadArea } from "@/components/ui-elements/UploadArea";
import { useDetection } from "@/hooks/useDetection";
import { DETECTION_MODELS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Sparkles, Loader2, CloudCog, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [searchParams] = useSearchParams();
  const modelId = searchParams.get("model");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoadingModel, setIsLoadingModel] = useState(false);
  const [loadFromGithub, setLoadFromGithub] = useState(true);
  
  const { 
    selectedImage, 
    selectedModel, 
    isAnalyzing, 
    result,
    isModelLoaded,
    setIsModelLoaded,
    modelLoadError,
    customRepoUrl,
    setCustomRepoUrl,
    handleImageSelect, 
    setSelectedModel, 
    analyzeImage,
    loadModelFromGitLab,
    loadModelFromGitHub
  } = useDetection();
  
  useEffect(() => {
    if (modelId) {
      const model = DETECTION_MODELS.find(m => m.id === modelId);
      if (model) {
        setSelectedModel(model);
      }
    }
  }, [modelId, setSelectedModel]);
  
  useEffect(() => {
    const loadModel = async () => {
      if (selectedModel && !isModelLoaded && !modelLoadError && customRepoUrl) {
        setIsLoadingModel(true);
        if (loadFromGithub) {
          await loadModelFromGitHub(selectedModel.id);
        } else {
          await loadModelFromGitLab(selectedModel.id);
        }
        setIsLoadingModel(false);
      }
    };
    
    loadModel();
  }, [selectedModel, isModelLoaded, modelLoadError, loadModelFromGitLab, loadModelFromGitHub, loadFromGithub, customRepoUrl]);
  
  useEffect(() => {
    if (result) {
      navigate("/results", { 
        state: { 
          result,
          imageUrl: selectedImage
        } 
      });
    }
  }, [result, navigate, selectedImage]);
  
  const handleContinue = () => {
    if (!customRepoUrl) {
      toast({
        title: "GitHub URL required",
        description: "Please enter your GitHub repository URL to load your custom model.",
        variant: "destructive",
      });
      return;
    }
    
    if (!isModelLoaded && !modelLoadError) {
      toast({
        title: "Model not loaded",
        description: "Please wait for the model to load before analyzing",
      });
      return;
    }
    
    if (modelLoadError) {
      toast({
        title: "Model error",
        description: "There was an error loading the model. Please check your GitHub URL and try again.",
        variant: "destructive",
      });
      return;
    }
    
    analyzeImage();
  };

  const toggleModelSource = () => {
    setLoadFromGithub(!loadFromGithub);
    if (selectedModel) {
      setIsModelLoaded(false);
      setIsLoadingModel(false);
    }
  };

  const handleRepoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomRepoUrl(e.target.value);
    if (selectedModel) {
      setIsModelLoaded(false);
      setIsLoadingModel(false);
    }
  };

  const handleLoadModel = async () => {
    if (!customRepoUrl.trim() || !selectedModel) {
      toast({
        title: "Required information missing",
        description: "Please enter a GitHub URL and select a model.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoadingModel(true);
    await loadModelFromGitHub(selectedModel.id);
    setIsLoadingModel(false);
  };
  
  const modelName = selectedModel?.name || "a detection model";
  
  return (
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-secondary mb-4">
          <span className="text-sm font-medium">Step 2 of 3</span>
        </div>
        
        <h1 className="mb-4">Upload Your Image</h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload an image to analyze with {modelName}
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12"
      >
        <UploadArea 
          onImageSelect={handleImageSelect} 
          selectedImage={selectedImage}
          isAnalyzing={isAnalyzing}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-8 p-5 rounded-lg border border-border"
      >
        <h3 className="text-lg font-medium mb-3">Load Your Custom Model</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="github-url" className="block text-sm font-medium mb-1">
              GitHub Repository URL
            </label>
            <div className="flex gap-2">
              <Input
                id="github-url"
                value={customRepoUrl}
                onChange={handleRepoUrlChange}
                placeholder="https://raw.githubusercontent.com/your-username/repo/main/models"
                className="flex-1"
              />
              <Button 
                onClick={handleLoadModel} 
                disabled={!customRepoUrl.trim() || !selectedModel || isLoadingModel}
              >
                {isLoadingModel ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-1" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Github className="w-4 h-4 mr-1" />
                    Load Model
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Provide the raw GitHub URL to the directory containing your CNN, SVM, K-means or transfer learning models
            </p>
          </div>
        </div>
      </motion.div>
      
      {selectedModel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center p-4 rounded-lg bg-secondary/50 mb-8"
        >
          <div className="flex items-center gap-2">
            <selectedModel.icon className="w-5 h-5 text-accent" />
            <span className="font-medium">Using {selectedModel.name}</span>
          </div>
          
          {isLoadingModel && (
            <>
              <div className="mx-4 h-6 border-l border-border"></div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Loading model...</span>
              </div>
            </>
          )}
          
          {isModelLoaded && (
            <>
              <div className="mx-4 h-6 border-l border-border"></div>
              <div className="flex items-center gap-2 text-green-500">
                <CloudCog className="w-4 h-4" />
                <span>Model loaded</span>
              </div>
            </>
          )}
          
          {modelLoadError && (
            <>
              <div className="mx-4 h-6 border-l border-border"></div>
              <div className="flex items-center gap-2 text-destructive">
                <span>Error loading model</span>
              </div>
            </>
          )}
          
          <div className="mx-4 h-6 border-l border-border"></div>
          <Link to="/models" className="text-sm text-accent hover:text-accent/80 transition-colors">
            Change model
          </Link>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center justify-center p-4 rounded-lg bg-secondary/50 mb-12"
      >
        <div className="flex items-center gap-2">
          {loadFromGithub ? <Github className="w-5 h-5 text-accent" /> : <CloudCog className="w-5 h-5 text-accent" />}
          <span className="font-medium">Loading from {loadFromGithub ? "GitHub" : "GitLab"}</span>
        </div>
        
        <div className="mx-4 h-6 border-l border-border"></div>
        <Button 
          variant="outline" 
          onClick={toggleModelSource} 
          className="text-sm"
          disabled={isLoadingModel}
        >
          Switch to {loadFromGithub ? "GitLab" : "GitHub"}
        </Button>
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Button
          variant="outline"
          asChild
          className="gap-2"
        >
          <Link to="/models">
            <ArrowLeft className="w-4 h-4" />
            Back to Models
          </Link>
        </Button>
        
        <Button
          onClick={handleContinue}
          disabled={!selectedImage || !selectedModel || isAnalyzing || isLoadingModel}
          className="gap-2"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Analyze Image
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default Upload;
