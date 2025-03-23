
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DETECTION_MODELS } from "@/lib/constants";
import { ModelCard } from "@/components/ui-elements/ModelCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ModelSelection = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleContinue = () => {
    if (selectedModel) {
      navigate(`/upload?model=${selectedModel}`);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  return (
    <div className="container max-w-6xl">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-secondary mb-4">
            <span className="text-sm font-medium">Step 1 of 3</span>
          </div>
        </motion.div>
        
        <motion.h1
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Choose a Detection Model
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Select the AI model you'd like to use for analyzing your artwork
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {DETECTION_MODELS.map((model) => (
          <ModelCard 
            key={model.id}
            model={model}
            isSelected={selectedModel === model.id}
            onClick={() => setSelectedModel(model.id)}
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Button
          variant="outline"
          asChild
          className="gap-2"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        
        <Button
          onClick={handleContinue}
          disabled={!selectedModel}
          className="gap-2"
        >
          Continue to Upload
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ModelSelection;
