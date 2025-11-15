import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-almond border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">V</span>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">Vaibhav Industries</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Exporting the Authentic Taste of India. Premium agro products delivered globally with integrity and quality.
            </p>
          </div>

          {/* Right Side - Navigation */}
          <div className="flex flex-col md:items-end">
            <nav className="flex flex-wrap gap-6 mb-4">
              <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/certificates" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Certificates
              </Link>
              <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Vaibhav Industries. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
