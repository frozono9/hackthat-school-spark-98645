import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Trophy, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[120px] md:text-[200px] lg:text-[250px] font-bold text-foreground leading-none tracking-tight">
              hack
            </h1>
            <div className="flex items-baseline justify-center gap-4 md:gap-8 -mt-8 md:-mt-12">
              <p className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground">2025</p>
              <h1 className="text-[120px] md:text-[200px] lg:text-[250px] font-bold text-foreground leading-none tracking-tight">
                that
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;