import { Brain, Shield, Atom, Users } from "lucide-react";

const EducationalFramework = () => {
  const frameworks = [
    {
      icon: Brain,
      title: "Computational Thinking",
      description: "Students break complex problems into manageable components, recognize patterns, to develop solutions."
    },
    {
      icon: Shield,
      title: "Digital & AI Literacy",
      description: "Participants gain hands-on understanding of how AI systems work, their capabilities, limitations, and ethical implications."
    },
    {
      icon: Atom,
      title: "STEM Integration",
      description: "Directly supports Computer Science, Technology, Mathematics, and interdisciplinary learning objectives."
    },
    {
      icon: Users,
      title: "21st Century Skills",
      description: "Addresses the 4Cs framework: Critical Thinking, Creativity, Communication, and Collaboration."
    }
  ];

  const alignment = [
    {
      title: "Collaboration/Communication",
      description: "Teams practice effective collaboration under time constraints and learn to articulate to diverse audiences."
    },
    {
      title: "Creative Problem-Solving",
      description: "Students apply design thinking principles to develop innovative solutions to real-world challenges."
    },
    {
      title: "EU Digital Competence",
      description: "Aligns with digital literacy, content creation, and problem-solving competencies."
    },
    {
      title: "IB/Cambridge Standards",
      description: "Supports ATL (Approaches to Learning) skills and CAS requirements for service and creativity."
    }
  ];

  return (
    <div className="bg-foreground py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-background mb-4">
            EDUCATIONAL FRAMEWORK
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-background/80">
            LEARNING OBJECTIVES
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {frameworks.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-background" />
              </div>
              <h4 className="text-xl font-bold text-background mb-3">{item.title}</h4>
              <p className="text-background/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-background/80 text-center mb-12">
            CURRICULUM ALIGNMENT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alignment.map((item, index) => (
              <div key={index} className="bg-background/5 backdrop-blur-sm border-2 border-background/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-background mb-3">{item.title}</h4>
                <p className="text-background/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalFramework;
