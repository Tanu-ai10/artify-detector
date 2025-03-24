
import { BrainCircuit, PieChart, GitMerge, Workflow } from "lucide-react";

export type DetectionModel = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  accuracy: number;
  detectionTime: string;
};

export const DETECTION_MODELS: DetectionModel[] = [
  {
    id: "cnn",
    name: "Convolutional Neural Network",
    description: "Deep learning model specialized in image processing with high accuracy for artistic style detection.",
    icon: BrainCircuit,
    accuracy: 93,
    detectionTime: "1-2 seconds",
  },
  {
    id: "transfer",
    name: "Transfer Learning",
    description: "Pre-trained model that's been fine-tuned to detect specific patterns in AI-generated art.",
    icon: GitMerge,
    accuracy: 91,
    detectionTime: "0.5-1 seconds",
  },
  {
    id: "svm",
    name: "Support Vector Machine",
    description: "Classic machine learning algorithm that excels at classification tasks with clear decision boundaries.",
    icon: PieChart,
    accuracy: 88,
    detectionTime: "0.2-0.5 seconds",
  },
  {
    id: "kmeans",
    name: "K-Means Clustering",
    description: "Unsupervised learning approach that groups pixels based on similar patterns and features.",
    icon: Workflow,
    accuracy: 82,
    detectionTime: "0.1-0.3 seconds",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How accurate is the AI art detection?",
    answer: "Our detection models range from 82% to 94% accuracy, with CNN being the most accurate. However, as AI generation technology evolves, we continuously update our models to maintain detection reliability."
  },
  {
    question: "Why might detection results vary between models?",
    answer: "Each model uses different techniques to analyze images. CNNs focus on visual patterns, Transfer Learning leverages pre-trained knowledge, SVMs look for decision boundaries, and K-Means examines pixel clusters. These approaches may identify different aspects of AI-generated content."
  },
  {
    question: "What types of AI-generated art can be detected?",
    answer: "Our tools can detect images created by popular AI generators like DALL-E, Midjourney, Stable Diffusion, and similar models. We're constantly expanding our detection capabilities for new generation techniques."
  },
  {
    question: "Why might human art be incorrectly flagged as AI-generated?",
    answer: "Some artistic styles, particularly digital art with precise patterns or unusual textures, can trigger false positives. Artists who employ techniques that mimic computational aesthetics might see higher misclassification rates."
  },
  {
    question: "Can I improve detection accuracy?",
    answer: "Yes! Upload high-resolution images without compression artifacts. Also, try running the analysis with multiple detection models and compare results for the most reliable determination."
  }
];
