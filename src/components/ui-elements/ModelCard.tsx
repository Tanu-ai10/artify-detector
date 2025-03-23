
import { type DetectionModel } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ModelCardProps {
  model: DetectionModel;
  isSelected: boolean;
  onClick: () => void;
}

export function ModelCard({ model, isSelected, onClick }: ModelCardProps) {
  const { name, description, icon: Icon, accuracy, detectionTime } = model;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-xl p-6 cursor-pointer transition-all duration-200 ${
        isSelected 
          ? "glass-card ring-2 ring-accent shadow-lg" 
          : "bg-card/70 hover:bg-card shadow border border-border"
      }`}
      onClick={onClick}
    >
      {isSelected && (
        <CheckCircle2 
          className="absolute top-4 right-4 h-5 w-5 text-accent" 
        />
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-2.5 rounded-lg ${isSelected ? "bg-accent/10" : "bg-secondary"}`}>
          <Icon 
            className={`h-5 w-5 ${isSelected ? "text-accent" : "text-foreground/80"}`}
          />
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-secondary/50 rounded-lg p-2.5">
          <p className="text-xs text-muted-foreground">Accuracy</p>
          <p className="font-medium">{accuracy}%</p>
        </div>
        <div className="bg-secondary/50 rounded-lg p-2.5">
          <p className="text-xs text-muted-foreground">Speed</p>
          <p className="font-medium">{detectionTime}</p>
        </div>
      </div>
    </motion.div>
  );
}
