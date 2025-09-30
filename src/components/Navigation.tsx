import { Button } from "@/components/ui/button";
import logo from "@/assets/hackthat-logo.png";

const Navigation = () => {
  return (
    <nav className="border-b border-foreground/20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="hackthat" className="h-8" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#vision" className="text-foreground/80 hover:text-foreground transition-colors">
                Vision
              </a>
              <a href="#challenges" className="text-foreground/80 hover:text-foreground transition-colors">
                Challenges
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;