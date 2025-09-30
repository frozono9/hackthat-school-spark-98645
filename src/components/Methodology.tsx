import { Calendar, Trophy, Lightbulb, MessageCircle, Users2 } from "lucide-react";

const Methodology = () => {
  const methodologyItems = [
    {
      icon: Calendar,
      title: "EDUCATIONAL EVENT",
      description: "One-day intensive hackathon experience"
    },
    {
      icon: Trophy,
      title: "CHALLENGES",
      description: "Three difficulty levels for all skill ranges"
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description: "Hands-on AI experimentation and prototyping"
    },
    {
      icon: MessageCircle,
      title: "EDUCATIONAL TALKS",
      description: "Expert insights on AI and technology"
    },
    {
      icon: Users2,
      title: "MENTORSHIP",
      description: "Guidance from experienced professionals"
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-center">
          OUR METHODOLOGY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
          {methodologyItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <item.icon className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Methodology;
