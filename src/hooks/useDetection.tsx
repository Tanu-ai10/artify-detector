
import { useState } from 'react';
import { type DetectionModel } from '@/lib/constants';

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
  
  const analyzeImage = () => {
    if (!selectedImage || !selectedModel) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis with timeout (in real app, this would be an API call)
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
  };
  
  return {
    selectedImage,
    selectedModel,
    isAnalyzing,
    result,
    handleImageSelect,
    setSelectedModel,
    analyzeImage,
    resetDetection: () => {
      setSelectedImage(null);
      setResult(null);
    }
  };
}
