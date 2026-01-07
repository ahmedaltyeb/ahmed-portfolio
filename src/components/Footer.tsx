import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#home"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Ahmed<span className="text-primary">.</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "Skills", "Projects", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Ahmed Eltyeb. Made with{" "}
            <Heart className="h-4 w-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};
