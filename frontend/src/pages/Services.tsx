import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, Code2, Cloud, HeadphonesIcon, Check, ArrowRight,
  Building2, Landmark, GraduationCap, Heart, ShoppingCart, 
  Factory, Radio, Briefcase 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import "./Services.css";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    features: [
      "Custom website development",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Content management systems",
      "Web portals & dashboards",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business requirements.",
    features: [
      "Enterprise applications",
      "API development & integration",
      "Legacy system modernization",
      "Mobile app development",
      "Database design & optimization",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Cloud infrastructure and DevOps practices that accelerate delivery.",
    features: [
      "Cloud migration & setup",
      "CI/CD pipeline implementation",
      "Infrastructure as Code",
      "Kubernetes & containerization",
      "Performance monitoring",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "IT Consulting",
    description: "Strategic technology consulting to guide your digital transformation.",
    features: [
      "Technology assessment",
      "Digital strategy development",
      "Architecture consulting",
      "Security audits",
      "Process optimization",
    ],
  },
];

const industries = [
  { icon: Landmark, name: "Government" },
  { icon: Building2, name: "Fintech" },
  { icon: GraduationCap, name: "Education" },
  { icon: Heart, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Briefcase, name: "Professional Services" },
];

const Services = () => {
  return (
    <Layout>
      <section className="services-hero">
        <div className="services-hero__orb" />
        <div className="services-hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="services-hero__content"
          >
            <span className="services-hero__label">Our Services</span>
            <h1 className="services-hero__title">
              Comprehensive <span className="text-gradient">Technology Solutions</span>
            </h1>
            <p className="services-hero__subtitle">
              From concept to deployment, we provide end-to-end services that help 
              businesses leverage technology for growth and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-grid">
        <div className="services-grid__container">
          <div className="services-grid__list">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="services-grid__card"
              >
                <div className="services-grid__card-inner">
                  <div className="services-grid__card-icon">
                    <service.icon />
                  </div>
                  <div className="services-grid__card-body">
                    <h3 className="services-grid__card-title">{service.title}</h3>
                    <p className="services-grid__card-desc">{service.description}</p>
                    <ul className="services-grid__features">
                      {service.features.map((feature) => (
                        <li key={feature} className="services-grid__feature">
                          <Check className="w-5 h-5 services-grid__feature-icon" />
                          <span className="services-grid__feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-industries">
        <div className="services-industries__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="services-industries__header"
          >
            <span className="services-industries__label">Industries We Serve</span>
            <h2 className="services-industries__title">
              Building Solutions Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="services-industries__subtitle">
              We have experience delivering technology solutions across diverse industries, 
              understanding the unique challenges and requirements of each sector.
            </p>
          </motion.div>

          <div className="services-industries__grid">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="services-industries__card"
              >
                <div className="services-industries__card-icon">
                  <industry.icon />
                </div>
                <span className="services-industries__card-name">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="services-cta__content"
          >
            <h2 className="services-cta__title">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h2>
            <p className="services-cta__subtitle">
              Let's discuss how we can help you achieve your technology goals.
            </p>
            <div className="services-cta__actions">
              <Button variant="hero" size="xl" asChild>
                <Link to="/quote">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
