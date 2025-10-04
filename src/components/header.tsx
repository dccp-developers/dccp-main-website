import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="font-serif text-xl text-primary-foreground font-semibold">
                O
              </span>
            </div>
            <h1 className="font-serif text-2xl text-foreground">DCCP Baguio</h1>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#news"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              News
            </a>
            <a
              href="#events"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Events
            </a>
            <a
              href="#about"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Student Portal
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
