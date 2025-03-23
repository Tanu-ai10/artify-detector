
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, X, Image as ImageIcon } from "lucide-react";

interface UploadAreaProps {
  onImageSelect: (file: File) => void;
  selectedImage: string | null;
  isAnalyzing: boolean;
}

export function UploadArea({ onImageSelect, selectedImage, isAnalyzing }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        onImageSelect(file);
      }
    }
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };
  
  const handleRemoveImage = () => {
    onImageSelect(null as unknown as File);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  return (
    <div
      className={`w-full rounded-xl transition-all duration-200 ${
        isDragging ? "bg-accent/5 border-2 border-dashed border-accent/50" : "border border-border"
      } ${selectedImage ? "p-4" : "p-8"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedImage ? (
        <div className="relative">
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden glass-card mb-2">
            <img 
              src={selectedImage} 
              alt="Selected preview" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {!isAnalyzing && (
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveImage}
                className="text-sm text-muted-foreground hover:text-destructive"
              >
                <X size={14} className="mr-1" />
                Remove
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
            <UploadCloud className="w-7 h-7 text-muted-foreground" />
          </div>
          
          <h3 className="text-lg font-medium mb-1">Upload an image</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md">
            Drag and drop your image here, or click to browse
          </p>
          
          <div className="flex gap-2 flex-wrap justify-center">
            <Button 
              onClick={() => fileInputRef.current?.click()}
              className="gap-1.5"
            >
              <ImageIcon size={16} />
              Browse images
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>
      )}
    </div>
  );
}
