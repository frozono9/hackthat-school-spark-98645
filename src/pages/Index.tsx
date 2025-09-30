import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AIImpact from "@/components/AIImpact";
import Vision from "@/components/Vision";
import Approach from "@/components/Approach";
import WhatIsHackathon from "@/components/WhatIsHackathon";
import EducationalFramework from "@/components/EducationalFramework";
import Methodology from "@/components/Methodology";
import Challenges from "@/components/Challenges";
import Talks from "@/components/Talks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AIImpact />
      <Vision />
      <Approach />
      <WhatIsHackathon />
      <EducationalFramework />
      <Methodology />
      <Challenges />
      <Talks />
      <Footer />
    </div>
  );
};

export default Index;
