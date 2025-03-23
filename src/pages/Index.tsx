
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Shield, Zap, Image, Sparkles, FlaskConical, Layers } from "lucide-react";

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
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="text-sm font-medium flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                State-of-the-Art AI Detection
              </span>
            </motion.div>
            
            <motion.h1 
              className="mb-6 leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-gradient font-semibold">Distinguish</span> AI-Generated Art 
              <br />From Human Creations
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our advanced detection models analyze visual patterns that human eyes miss,
              identifying AI-generated artwork with exceptional accuracy.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button asChild size="lg" className="gap-2 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/30">
                <Link to="/upload">
                  Analyze Image
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Image Showcase */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i} 
              className="group h-60 md:h-72 rounded-2xl glass-card flex items-center justify-center overflow-hidden cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary/80 to-background/80 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <Image className="w-12 h-12 text-accent/30 group-hover:text-accent/50 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h2 
            className="mb-4 inline-block text-gradient"
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
              title: "Neural Network Analysis",
              description: "Our CNN models inspect pixel patterns and brushstrokes that reveal the subtle differences between AI and human art."
            },
            {
              icon: Layers,
              title: "Transfer Learning",
              description: "Pre-trained on millions of images, our models leverage knowledge from diverse datasets for superior accuracy."
            },
            {
              icon: FlaskConical,
              title: "Multiple Detection Methods",
              description: "Choose from CNN, Transfer Learning, SVM, or K-Means clustering for different analytical approaches."
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
            },
            {
              icon: Sparkles,
              title: "Continuous Learning",
              description: "Our models constantly improve by learning from new AI-generated artwork and techniques."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-8 glass-card hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
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
          className="rounded-3xl p-10 md:p-16 glass-elevated text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 opacity-70"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gradient">Ready to Detect AI Art?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Upload your image and let our advanced models analyze whether it was created by AI or a human artist.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild size="lg" className="gap-2 px-8 py-6 rounded-full text-lg shadow-lg shadow-accent/20 hover:shadow-accent/30">
                <Link to="/models">
                  Choose a Model
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 rounded-full text-lg border-2">
                <Link to="/upload">
                  Upload Now
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
