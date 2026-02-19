import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import "./Portfolio.css";

const projects = [
  {
    name: "Municipal Service Portal",
    industry: "Government",
    description: "A comprehensive citizen services portal enabling online permit applications, bill payments, and service requests.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    name: "Fintech Payment Platform",
    industry: "Fintech",
    description: "Secure payment processing platform handling millions of transactions with real-time fraud detection.",
    techStack: ["TypeScript", "Microservices", "Kubernetes", "Redis"],
  },
  {
    name: "Learning Management System",
    industry: "Education",
    description: "Full-featured LMS supporting virtual classrooms, assessments, and progress tracking for universities.",
    techStack: ["Next.js", "Django", "PostgreSQL", "WebRTC"],
  },
  {
    name: "Healthcare Patient Portal",
    industry: "Healthcare",
    description: "HIPAA-compliant patient portal for appointment scheduling, medical records access, and telemedicine.",
    techStack: ["React", "Python", "MongoDB", "Azure"],
  },
  {
    name: "E-commerce Marketplace",
    industry: "Retail",
    description: "Multi-vendor marketplace with advanced inventory management and integrated logistics.",
    techStack: ["Next.js", "Node.js", "Elasticsearch", "Stripe"],
  },
  {
    name: "Manufacturing ERP",
    industry: "Manufacturing",
    description: "Custom ERP system for production planning, inventory control, and supply chain management.",
    techStack: ["React", ".NET", "SQL Server", "Power BI"],
  },
];

const caseStudy = {
  client: "National Municipal Services",
  challenge: "The municipality was struggling with paper-based processes, long queues, and citizen dissatisfaction. They needed a digital transformation solution.",
  solution: "We developed a comprehensive online portal enabling citizens to apply for permits, pay bills, report issues, and track requests—all from their devices.",
  technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
  results: [
    "70% reduction in in-person visits",
    "85% improvement in processing time",
    "95% citizen satisfaction rate",
    "40% cost savings on operations",
  ],
};

const Portfolio = () => {
  return (
    <Layout>
      <section className="portfolio-hero">
        <div className="portfolio-hero__orb" />
        <div className="portfolio-hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="portfolio-hero__content"
          >
            <span className="portfolio-hero__label">Portfolio</span>
            <h1 className="portfolio-hero__title">
              Our <span className="text-gradient">Work</span> Speaks for Itself
            </h1>
            <p className="portfolio-hero__subtitle">
              Explore our portfolio of successful projects across various industries. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-projects">
        <div className="portfolio-projects__container">
          <div className="portfolio-projects__grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="portfolio-projects__card"
              >
                <div className="portfolio-projects__card-image">
                  <div className="portfolio-projects__card-image-overlay" />
                  <div className="portfolio-projects__card-image-letter">
                    {project.name.charAt(0)}
                  </div>
                </div>
                <div className="portfolio-projects__card-body">
                  <div className="portfolio-projects__card-badge-row">
                    <span className="portfolio-projects__card-badge">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="portfolio-projects__card-title">
                    {project.name}
                  </h3>
                  <p className="portfolio-projects__card-desc">
                    {project.description}
                  </p>
                  <div className="portfolio-projects__card-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="portfolio-projects__card-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-case">
        <div className="portfolio-case__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="portfolio-case__header"
          >
            <span className="portfolio-case__label">Featured Case Study</span>
            <h2 className="portfolio-case__title">{caseStudy.client}</h2>
          </motion.div>

          <div className="portfolio-case__body">
            <div className="portfolio-case__grid">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="portfolio-case__card"
              >
                <h4 className="portfolio-case__card-title">The Challenge</h4>
                <p className="portfolio-case__card-desc">{caseStudy.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="portfolio-case__card"
              >
                <h4 className="portfolio-case__card-title">Our Solution</h4>
                <p className="portfolio-case__card-desc">{caseStudy.solution}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="portfolio-case__results"
            >
              <h4 className="portfolio-case__results-title">Results</h4>
              <div className="portfolio-case__results-grid">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="portfolio-case__result">
                    <div className="portfolio-case__result-value">
                      {result.split(" ")[0]}
                    </div>
                    <div className="portfolio-case__result-label">
                      {result.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="portfolio-cta__content"
          >
            <h2 className="portfolio-cta__title">
              Ready to Create Your <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="portfolio-cta__subtitle">
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="portfolio-cta__actions">
              <Button variant="default" size="xl" asChild>
                <Link to="/quote">
                  Start Your Project
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

export default Portfolio;
