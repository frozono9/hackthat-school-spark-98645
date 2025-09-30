const WhatIsHackathon = () => {
  return (
    <div className="bg-foreground py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-background mb-12">
          WHAT IS A HACKATHON?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-background/80 leading-relaxed">
              A hackathon is an innovation marathon where students work in teams to solve 
              exciting challenges in a limited time. Unlike standard lessons, hackathons 
              promote creativity, teamwork, and hands-on learning.
            </p>
          </div>
          
          <div>
            <p className="text-lg text-background/80 leading-relaxed">
              We bring AI to education through an innovative one-day hackathon that transforms 
              learning into collaboration and creativity. By guiding students to explore real-world 
              problems, they experiment with AI tools in a safe and engaging environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsHackathon;
