import { useState } from 'react';
import { type DetectionModel } from '@/lib/constants';

export function useDetection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<DetectionModel | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleImageSelect = (file: File | null) => {
    if (!file) {
      setSelectedImage(null);
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setError(null); // Reset error when a new image is selected
    };
    reader.readAsDataURL(file);
  };
  
  const analyzeImage = () => {
    if (!selectedImage) return;

    if (!selectedModel) {
      setError('Error: Model not found. Please select a detection model.');
      return;
    }

    setIsAnalyzing(true);

    // Simulate analysis with timeout (for demo purposes)
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return {
    selectedImage,
    selectedModel,
    isAnalyzing,
    error,
    handleImageSelect,
    setSelectedModel,
    analyzeImage,
    resetDetection: () => {
      setSelectedImage(null);
      setError(null);
    }
  };
}
