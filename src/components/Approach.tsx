import { Sparkles, Users, Lightbulb, Rocket } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Sparkles,
      title: "Experimentation & Prototyping"
    },
    {
      icon: Lightbulb,
      title: "Curiosity & Exploration"
    },
    {
      icon: Users,
      title: "Collaboration & Community"
    },
    {
      icon: Rocket,
      title: "Innovation Spaces & Events"
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center">
          HOW TO APPROACH AI?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
                <approach.icon className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {approach.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
