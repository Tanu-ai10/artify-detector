
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ResultsCard } from "@/components/ui-elements/ResultsCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { result, imageUrl } = location.state || {};
  
  useEffect(() => {
    if (!result) {
      navigate("/upload");
    }
  }, [result, navigate]);
  
  if (!result || !imageUrl) {
    return null;
  }
  
  return (
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-secondary mb-4">
          <span className="text-sm font-medium">Step 3 of 3</span>
        </div>
        
        <h1 className="mb-4">Analysis Results</h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Here's what our AI detection model determined
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/2] rounded-xl overflow-hidden glass-card">
            <img 
              src={imageUrl} 
              alt="Analyzed artwork" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ResultsCard {...result} />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full max-w-2xl mx-auto bg-secondary/30 rounded-xl p-6 mb-12"
      >
        <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-accent" />
          Understanding the results
        </h3>
        <p className="text-muted-foreground mb-4">
          {result.isAI 
            ? "Our model detected patterns and characteristics commonly found in AI-generated artwork. These may include uniform textures, perfect symmetry, or unusual composition elements that are rare in human art."
            : "Our model found characteristics typical of human-created artwork including natural brush strokes, intentional imperfections, and compositional elements that align with traditional artistic techniques."}
        </p>
        <p className="text-sm text-muted-foreground">
          Model confidence of {result.confidence}% indicates the level of certainty in this assessment.
        </p>
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Button
          variant="outline"
          asChild
          className="gap-2"
        >
          <Link to="/upload">
            <ArrowLeft className="w-4 h-4" />
            Back to Upload
          </Link>
        </Button>
        
        <Button
          asChild
          className="gap-2"
        >
          <Link to="/models">
            <Upload className="w-4 h-4" />
            Analyze Another Image
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Results;
