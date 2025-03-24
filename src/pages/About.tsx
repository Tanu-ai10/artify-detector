
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrainCircuit, GitMerge, PieChart, Workflow, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="container max-w-5xl">
      {/* Hero Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">About Artalyze</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the technology behind AI art detection
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card rounded-xl p-8 md:p-10"
        >
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="lead">
              AI-generated artwork has been rapidly evolving, making it increasingly difficult to distinguish from human-created art. ArtifyDetector leverages advanced machine learning techniques to identify subtle patterns and characteristics unique to AI-generated images.
            </p>
            
            <p>
              Our platform combines multiple detection models, each specialized in identifying different aspects of AI-generated content. From pixel-level analysis to compositional evaluation, our technology examines various dimensions of artwork to provide accurate assessments.
            </p>
            
            <p>
              While no detection system is perfect, we continuously train and refine our models to keep pace with advancements in AI art generation, maintaining high accuracy rates across different styles and techniques.
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* Models Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Detection Models</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how each of our AI models approaches the detection process differently
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: BrainCircuit,
              title: "Convolutional Neural Network",
              description: "Analyzes visual patterns in images by applying convolutional filters that identify features like textures, edges, and shapes common in AI-generated art."
            },
            {
              icon: GitMerge,
              title: "Transfer Learning",
              description: "Utilizes knowledge from pre-trained models on large datasets, then fine-tunes specifically to recognize the subtle differences between AI and human art."
            },
            {
              icon: PieChart,
              title: "Support Vector Machine",
              description: "Creates optimal decision boundaries between AI and human art classifications based on extracted features from images."
            },
            {
              icon: Workflow,
              title: "K-Means Clustering",
              description: "Groups pixels and patterns into clusters to identify statistical anomalies that often appear in AI-generated artwork but rarely in human creations."
            }
          ].map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card/70 border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-secondary">
                  <model.icon className="w-5 h-5 text-foreground/80" />
                </div>
                <h3 className="text-xl font-medium">{model.title}</h3>
              </div>
              <p className="text-muted-foreground">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about AI art detection
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section>
        <motion.div 
          className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-accent/20 to-background border border-accent/10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to Try It Yourself?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your image and see our detection technology in action
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/upload">
              Get Started
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
