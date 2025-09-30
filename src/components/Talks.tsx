import { Presentation } from "lucide-react";

const Talks = () => {
  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-xl md:text-2xl italic font-light text-foreground/80 mb-4">
              METHODOLOGY
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              OUR TALKS
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              During the event, we host a series of talks on artificial intelligence designed 
              to inspire and guide students. These sessions provide insights into real-world 
              applications of AI and practical tips for problem-solving. By connecting theory 
              with action, the talks prepare students to tackle the challenges of the hackathon 
              with confidence.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-foreground/10 flex items-center justify-center">
              <Presentation className="w-24 h-24 text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talks;
