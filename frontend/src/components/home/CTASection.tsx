import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./CTASection.css";

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__bg" />
      <div className="cta-section__orb" />

      <div className="cta-section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-section__content"
        >
          <div className="cta-section__icon-wrapper">
            <Zap className="cta-section__icon" />
          </div>
          
          <h2 className="cta-section__title">
            Ready to Build Something{" "}
            <span className="text-gradient">Extraordinary</span>?
          </h2>
          
          <p className="cta-section__subtitle">
            Let's discuss your project and create a solution that drives real business results. 
            Get a detailed quote tailored to your specific needs.
          </p>

          <div className="cta-section__actions">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">
                Request a Quote
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
