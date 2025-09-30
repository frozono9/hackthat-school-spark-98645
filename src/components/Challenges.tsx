import { Code, Mic, Search } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: Search,
      level: "Beginner Challenge",
      title: "Tech Easter Egg Hunt",
      description: "Students participate in a digital scavenger hunt across the school, solving AI- and tech-themed riddles at hidden QR code and puzzle stations. Teams collaborate to complete the hunt and unlock a final digital treasure."
    },
    {
      icon: Mic,
      level: "Intermediate Challenge",
      title: "Voice AI Project",
      description: "Students will use AI voice technology and natural language prompting to create their own talking assistant. They'll give their robots a personality, build decision-making rules, and repurpose it into creative new roles."
    },
    {
      icon: Code,
      level: "Advanced Challenge",
      title: "Machine Learning Model",
      description: "Teams build a simple machine learning model using Google Colab or Teachable Machine, training and evaluating it with a provided dataset. Students learn key evaluation metrics and explain their model's process and limitations."
    }
  ];

  return (
    <div className="bg-foreground py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xl md:text-2xl italic font-light text-background/60 mb-4">
            METHODOLOGY
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-background mb-8">
            OUR CHALLENGES
          </h2>
          <p className="text-lg text-background/80 max-w-4xl">
            Designed to work in <span className="font-bold text-background">English, Spanish or Catalan</span>, 
            our hackathon includes <span className="font-bold text-background">three challenges</span> of{" "}
            <span className="font-bold text-background">increasing difficulty</span>. Each team can select 
            the challenge that best fits their level. These challenges are{" "}
            <span className="font-bold text-background">designed to be completed in the allotted time</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-background/5 backdrop-blur-sm border-2 border-background/20 rounded-lg p-8 hover:border-background/40 transition-colors"
            >
              <challenge.icon className="w-12 h-12 text-background mb-4" />
              <h3 className="text-2xl font-bold text-background mb-2">
                {challenge.level}
              </h3>
              <h4 className="text-xl font-semibold text-background/80 mb-4">
                {challenge.title}
              </h4>
              <p className="text-background/70 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
