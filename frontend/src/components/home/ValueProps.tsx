import { motion } from "framer-motion";
import { Globe, Code2, Cloud, HeadphonesIcon } from "lucide-react";
import "./ValueProps.css";

const valueProps = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies. From corporate sites to complex web platforms.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Custom software solutions tailored to your business needs. Scalable, maintainable, and built for the long term.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Cloud infrastructure, CI/CD pipelines, and DevOps practices that accelerate your delivery and reduce costs.",
  },
  {
    icon: HeadphonesIcon,
    title: "IT Consulting",
    description: "Strategic technology consulting to guide your digital transformation and optimize your IT investments.",
  },
];

export function ValueProps() {
  return (
    <section className="value-props">
      <div className="value-props__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="value-props__header"
        >
          <span className="value-props__label">
            What We Do
          </span>
          <h2 className="value-props__title">
            Comprehensive <span className="text-gradient">Technology Solutions</span>
          </h2>
          <p className="value-props__subtitle">
            We offer a full spectrum of software and technology services to help businesses 
            thrive in the digital age.
          </p>
        </motion.div>

        <div className="value-props__grid">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="value-props__card"
            >
              <div className="value-props__card-icon">
                <prop.icon />
              </div>
              <h3 className="value-props__card-title">{prop.title}</h3>
              <p className="value-props__card-desc">
                {prop.description}
              </p>
              <div className="value-props__card-bar" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
