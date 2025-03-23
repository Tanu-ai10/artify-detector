
import { CheckCircle2, XCircle, AlertCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface ResultsCardProps {
  isAI: boolean;
  confidence: number;
  modelUsed: string;
  processingTime: string;
}

export function ResultsCard({ isAI, confidence, modelUsed, processingTime }: ResultsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl p-8 shadow-lg w-full max-w-lg mx-auto"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
          isAI ? "bg-accent/10" : "bg-green-500/10"
        }`}>
          {isAI ? (
            <Zap className="w-10 h-10 text-accent" />
          ) : (
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          )}
        </div>
        
        <h2 className="text-2xl font-semibold mb-2">
          {isAI ? "AI-Generated Art" : "Human-Created Art"}
        </h2>
        
        <p className="text-muted-foreground mb-6 max-w-md">
          {isAI 
            ? "This image was likely created using AI generation tools." 
            : "This image was likely created by a human artist."}
        </p>
        
        <div className="w-full bg-secondary/50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Confidence</span>
            <span className="text-sm font-medium">{confidence}%</span>
          </div>
          <Progress value={confidence} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 w-full text-sm">
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="text-muted-foreground mb-1">Model Used</p>
            <p className="font-medium">{modelUsed}</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="text-muted-foreground mb-1">Processing Time</p>
            <p className="font-medium">{processingTime}</p>
          </div>
        </div>
        
        {confidence < 70 && (
          <div className="flex items-center mt-6 p-3 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <p className="text-sm">
              Low confidence result. Consider trying a different model.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
