import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar__container">
        <nav className="navbar__nav">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <span>S</span>
            </div>
            <span className="navbar__logo-text">
              SBM<span className="highlight">Concepts</span>
            </span>
          </Link>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="navbar__link-indicator"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="navbar__cta">
            <Button variant="gold" size="lg" asChild>
              <Link to="/quote">
                Get a Quote
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar__mobile-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar__mobile-menu"
          >
            <div className="navbar__mobile-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`navbar__mobile-link ${location.pathname === link.path ? "navbar__mobile-link--active" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  Get a Quote
                  <ChevronRight className="w-2 h-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
