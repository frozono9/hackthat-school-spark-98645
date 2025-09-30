import logo from "@/assets/hackthat-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="hackthat" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-background/70 mb-4 max-w-md">
              Bringing AI to education through innovative hackathons 
              in schools across Spain.
            </p>
            <div className="text-sm text-background/70">
              © 2025 HackThat. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Teacher Guide</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Educational Material</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="mailto:info@hackthat.es" className="hover:text-background transition-colors">info@hackthat.es</a></li>
              <li><a href="tel:+34900000000" className="hover:text-background transition-colors">+34 900 000 000</a></li>
              <li>Madrid, Spain</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;