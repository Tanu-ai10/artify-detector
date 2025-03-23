
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Shield, Zap, Image } from "lucide-react";

const Index = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div 
              className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="text-sm font-medium">AI Detection Technology</span>
            </motion.div>
            
            <motion.h1 
              className="mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Distinguish AI-Generated Art From Human Creations
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our advanced detection models can analyze and identify whether an artwork was created by AI or by human hands with high precision.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/upload">
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Image Showcase */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="h-60 rounded-xl glass-card flex items-center justify-center overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                <Image className="w-12 h-12 text-foreground/10 animate-pulse-slow" />
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Our Detection Works
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our suite of advanced AI models analyze various aspects of artwork to determine its origin.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BrainCircuit,
              title: "Multiple Detection Models",
              description: "Choose from CNN, Transfer Learning, SVM, or K-Means clustering models for different analysis approaches."
            },
            {
              icon: Shield,
              title: "High Accuracy Rate",
              description: "Our most advanced model achieves up to 94% accuracy in distinguishing AI from human-created art."
            },
            {
              icon: Zap,
              title: "Instant Analysis",
              description: "Receive detection results in seconds, with detailed confidence metrics and visual explanations."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-6 glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <motion.div 
          className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-accent/20 to-background border border-accent/10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to Detect AI Art?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your image and let our advanced models analyze whether it was created by AI or a human artist.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/models">
                Choose a Model
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/upload">
                Upload Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
