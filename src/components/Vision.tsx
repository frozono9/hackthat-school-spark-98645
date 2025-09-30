import visionTitle from "@/assets/vision-title.png";

const Vision = () => {
  return (
    <div className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl md:text-3xl italic font-light text-foreground/80 mb-12">
          VISION
        </p>
        <div className="flex items-center justify-center">
          <img 
            src={visionTitle} 
            alt="Bring AI to Education" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
