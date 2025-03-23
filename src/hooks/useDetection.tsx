
import { useState } from 'react';
import { type DetectionModel } from '@/lib/constants';
import { toast } from '@/components/ui/use-toast';

interface DetectionResult {
  isAI: boolean;
  confidence: number;
  modelUsed: string;
  processingTime: string;
}

export function useDetection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<DetectionModel | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [modelLoadError, setModelLoadError] = useState<string | null>(null);
  
  const handleImageSelect = (file: File | null) => {
    if (!file) {
      setSelectedImage(null);
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      // Reset result when new image is selected
      setResult(null);
    };
    reader.readAsDataURL(file);
  };
  
  const loadModelFromGitLab = async (modelId: string) => {
    if (!selectedModel) return;
    
    setIsModelLoaded(false);
    setModelLoadError(null);
    
    try {
      // Replace with your actual GitLab repository URL and path to models
      const gitlabRepoUrl = `https://gitlab.com/your-username/your-repo/-/raw/main/models/${modelId}`;
      
      console.log(`Loading model from: ${gitlabRepoUrl}`);
      const response = await fetch(gitlabRepoUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to load model: ${response.statusText}`);
      }
      
      // For model files, you might need to handle different file types
      // For JSON models:
      const modelData = await response.json();
      console.log("Model loaded successfully", modelData);
      
      // For binary model files, you might use:
      // const modelBuffer = await response.arrayBuffer();
      
      setIsModelLoaded(true);
      toast({
        title: "Model loaded successfully",
        description: `${selectedModel.name} is ready to use`,
      });
      
      return modelData;
    } catch (error) {
      console.error("Error loading model:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setModelLoadError(errorMessage);
      
      toast({
        title: "Failed to load model",
        description: errorMessage,
        variant: "destructive",
      });
      
      return null;
    }
  };

  const loadModelFromGitHub = async (modelId: string) => {
    if (!selectedModel) return;
    
    setIsModelLoaded(false);
    setModelLoadError(null);
    
    try {
      // GitHub raw content URL pattern
      const githubRepoUrl = `https://raw.githubusercontent.com/your-username/your-repo/main/models/${modelId}`;
      
      console.log(`Loading model from GitHub: ${githubRepoUrl}`);
      const response = await fetch(githubRepoUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to load model from GitHub: ${response.statusText}`);
      }
      
      // For JSON models:
      const modelData = await response.json();
      console.log("Model loaded successfully from GitHub", modelData);
      
      setIsModelLoaded(true);
      toast({
        title: "Model loaded successfully",
        description: `${selectedModel.name} is ready to use`,
        variant: "default",
      });
      
      return modelData;
    } catch (error) {
      console.error("Error loading model from GitHub:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setModelLoadError(errorMessage);
      
      toast({
        title: "Failed to load model from GitHub",
        description: errorMessage,
        variant: "destructive",
      });
      
      return null;
    }
  };
  
  const analyzeImage = async () => {
    if (!selectedImage || !selectedModel) return;
    
    setIsAnalyzing(true);
    
    try {
      // Try to load the model if not loaded already
      if (!isModelLoaded) {
        // Try GitHub first, then fall back to GitLab if needed
        const modelData = await loadModelFromGitHub(selectedModel.id) || 
                          await loadModelFromGitLab(selectedModel.id);
        
        if (!modelData) {
          setIsAnalyzing(false);
          return;
        }
      }
      
      // In a real implementation, you would:
      // 1. Preprocess the image to the format expected by your model
      // 2. Run the model with the preprocessed image
      // 3. Get the prediction results
      
      // For now, we'll continue with the simulated results
      console.log("Analyzing image with model:", selectedModel.name);
      
      // Simulate analysis with timeout (in real app, this would be model inference)
      setTimeout(() => {
        // Generate random result for demo purposes
        const randomConfidence = Math.floor(Math.random() * 30) + 70; // 70-99%
        const isAI = Math.random() > 0.5; // Random true/false
        
        setResult({
          isAI,
          confidence: randomConfidence,
          modelUsed: selectedModel.name,
          processingTime: selectedModel.detectionTime,
        });
        
        setIsAnalyzing(false);
      }, 2000); // Simulate 2 second processing time
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your image",
        variant: "destructive",
      });
      setIsAnalyzing(false);
    }
  };
  
  return {
    selectedImage,
    selectedModel,
    isAnalyzing,
    result,
    isModelLoaded,
    modelLoadError,
    handleImageSelect,
    setSelectedModel,
    analyzeImage,
    loadModelFromGitLab,
    loadModelFromGitHub,
    resetDetection: () => {
      setSelectedImage(null);
      setResult(null);
      setIsModelLoaded(false);
    }
  };
}
