import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Target, Eye, Code2, TestTube, Shield, 
  Cpu, Database, Cloud, Server, Lock, FileCode
} from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import "./About.css";

const competencies = [
  { icon: Code2, title: "Software Development", description: "Full-stack development expertise" },
  { icon: Target, title: "Web Development", description: "Modern, responsive web applications" },
  { icon: Cloud, title: "DevOps", description: "CI/CD, containerization, cloud infrastructure" },
  { icon: Eye, title: "Consulting", description: "Strategic technology guidance" },
  { icon: TestTube, title: "QA & Testing", description: "Comprehensive quality assurance" },
  { icon: Shield, title: "Security", description: "Security audits and implementation" },
];

const techStack = {
  languages: ["TypeScript", "JavaScript", "Python", "Java", "C#", "Go"],
  frameworks: ["React", "Next.js", "Node.js", "Django", "Spring Boot", ".NET"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
};

const compliance = [
  { icon: Shield, title: "POPIA Compliance", description: "Protection of Personal Information Act compliant" },
  { icon: FileCode, title: "CSD Registration", description: "Central Supplier Database registered" },
  { icon: Lock, title: "B-BBEE Alignment", description: "Committed to economic transformation" },
  { icon: Server, title: "Secure SDLC", description: "Security integrated throughout development" },
];

const About = () => {
  return (
    <Layout>
      <section className="about-hero">
        <div className="about-hero__orb" />
        <div className="about-hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-hero__content"
          >
            <span className="about-hero__label">About Us</span>
            <h1 className="about-hero__title">
              Building the <span className="text-gradient">Future</span> of Digital
            </h1>
            <p className="about-hero__subtitle">
              SBM Concepts is a technology consulting firm specializing in enterprise-grade 
              web and software solutions. We transform complex business challenges into 
              elegant digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-mv">
        <div className="about-mv__container">
          <div className="about-mv__grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-mv__card"
            >
              <div className="about-mv__card-icon about-mv__card-icon--primary">
                <Target />
              </div>
              <h3 className="about-mv__card-title">Our Mission</h3>
              <p className="about-mv__card-desc">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We believe in building lasting partnerships 
                with our clients, delivering exceptional value through quality software and 
                strategic consulting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-mv__card"
            >
              <div className="about-mv__card-icon about-mv__card-icon--accent">
                <Eye />
              </div>
              <h3 className="about-mv__card-title">Our Vision</h3>
              <p className="about-mv__card-desc">
                To be the leading technology partner for businesses across Africa, recognized 
                for our technical excellence, innovative solutions, and commitment to client 
                success. We strive to shape the digital landscape and contribute to 
                technological advancement in the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-comp">
        <div className="about-comp__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-comp__header"
          >
            <span className="about-comp__label">What We Excel At</span>
            <h2 className="about-comp__title">
              Core <span className="text-gradient">Competencies</span>
            </h2>
          </motion.div>

          <div className="about-comp__grid">
            {competencies.map((comp, index) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="about-comp__card"
              >
                <div className="about-comp__card-icon">
                  <comp.icon />
                </div>
                <h4 className="about-comp__card-title">{comp.title}</h4>
                <p className="about-comp__card-desc">{comp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-tech">
        <div className="about-tech__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-tech__header"
          >
            <span className="about-tech__label">Technology Stack</span>
            <h2 className="about-tech__title">
              Tools & <span className="text-gradient">Technologies</span>
            </h2>
          </motion.div>

          <div className="about-tech__grid">
            {Object.entries(techStack).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="about-tech__card"
              >
                <div className="about-tech__card-header">
                  {category === "languages" && <Cpu />}
                  {category === "frameworks" && <Code2 />}
                  {category === "databases" && <Database />}
                  {category === "cloud" && <Cloud />}
                  <h4>{category}</h4>
                </div>
                <div className="about-tech__tags">
                  {items.map((item) => (
                    <span key={item} className="about-tech__tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-compliance">
        <div className="about-compliance__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-compliance__header"
          >
            <span className="about-compliance__label">Compliance & Standards</span>
            <h2 className="about-compliance__title">
              Trusted & <span className="text-gradient">Compliant</span>
            </h2>
          </motion.div>

          <div className="about-compliance__grid">
            {compliance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="about-compliance__card"
              >
                <div className="about-compliance__card-icon">
                  <item.icon />
                </div>
                <h4 className="about-compliance__card-title">{item.title}</h4>
                <p className="about-compliance__card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-cta__content"
          >
            <h2 className="about-cta__title">
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h2>
            <p className="about-cta__subtitle">
              Ready to start your next project? We'd love to hear from you.
            </p>
            <div className="about-cta__actions">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
