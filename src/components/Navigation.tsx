import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import AuthModals from "./AuthModals";
import logo from "@/assets/anymus-vergo.png"; // Make sure alias works with tsconfig

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignIn = (email: string, password: string) => {
    console.log("Sign in:", email, password);
    // Handle sign-in logic
  };

  const handleSignUp = (email: string, password: string, name: string) => {
    console.log("Sign up:", email, password, name);
    // Handle sign-up logic
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Anymus Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-foreground">Anymus Vergo™</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-muted-foreground">
          {isHomePage && (
            <>
              <button onClick={() => scrollToSection("features")}>Features</button>
              <button onClick={() => scrollToSection("how-it-works")}>How it Works</button>
              <button onClick={() => scrollToSection("pricing")}>Pricing</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" onClick={() => AuthModals.open("signin")}>
            Sign In
          </Button>
          <Button size="sm" onClick={() => AuthModals.open("signup")}>
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
