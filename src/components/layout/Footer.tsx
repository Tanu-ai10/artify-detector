import { Link } from "react-router-dom";
import { Zap, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 text-xl font-semibold mb-2">
              <img src="/image.png" alt="Artalyze Logo" className="h-6 w-auto" />
              <span>Artalyze</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Cutting-edge AI technology for analyzing and detecting AI-generated artwork.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex flex-row gap-6">
              <Link 
                to="/" 
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/models" 
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Models
              </Link>
              <Link 
                to="/upload" 
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Upload
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Artalyze. Empowering the future of digital art analysis.
          </p>
        </div>
      </div>
    </footer>
  );
}
