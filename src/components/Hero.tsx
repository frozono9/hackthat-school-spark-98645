import titleImage from "@/assets/hackthat-2025-title.png";

const Hero = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="relative">
          <img 
            src={titleImage} 
            alt="HackThat 2025" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;