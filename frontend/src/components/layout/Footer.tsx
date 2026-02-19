import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import "./Footer.css";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/services" },
    { name: "Software Development", path: "/services" },
    { name: "DevOps & Cloud", path: "/services" },
    { name: "IT Consulting", path: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <span>S</span>
              </div>
              <span className="footer__logo-text">
                SBM<span className="highlight">Concepts</span>
              </span>
            </Link>
            <p className="footer__description">
              Enterprise-grade web and software solutions. We transform complex business challenges into elegant digital solutions.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="footer__social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="footer__social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__section-title">Company</h4>
            <ul className="footer__link-list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__section-title">Services</h4>
            <ul className="footer__link-list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__section-title">Contact</h4>
            <ul className="footer__link-list">
              <li className="footer__contact-item">
                <Mail className="w-5 h-5 footer__contact-icon" />
                <a href="mailto:info@sbmconcepts.co.za" className="footer__contact-link">
                  info@sbmconcepts.co.za
                </a>
              </li>
              <li className="footer__contact-item">
                <Phone className="w-5 h-5 footer__contact-icon" />
                <a href="tel:+27649096152" className="footer__contact-link">
                  +27 64 909 6152
                </a>
              </li>
              <li className="footer__contact-item footer__contact-item--top">
                <MapPin className="w-5 h-5 footer__contact-icon" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} SBM Concepts. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer__legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
