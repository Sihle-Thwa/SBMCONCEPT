import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import "./Pricing.css";

const pricingTiers = [
  {
    name: "Start-Up",
    price: "R25,000",
    priceDetail: "from",
    description: "Perfect for small businesses and MVPs looking to establish their digital presence.",
    idealFor: "Small businesses, startups, MVPs",
    features: [
      "Basic website or web application",
      "Up to 5 pages/screens",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "30 days post-launch support",
      "Basic hosting setup assistance",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "R75,000",
    priceDetail: "from",
    description: "For growing businesses ready to scale their digital operations.",
    idealFor: "SMEs, growing startups",
    features: [
      "Custom web application",
      "Up to 15 pages/screens",
      "User authentication system",
      "Database integration",
      "Payment gateway integration",
      "Admin dashboard",
      "Performance optimization",
      "90 days post-launch support",
      "CI/CD pipeline setup",
    ],
    popular: true,
  },
  {
    name: "Corporate",
    price: "R200,000",
    priceDetail: "from",
    description: "Enterprise solutions for established businesses with complex requirements.",
    idealFor: "Established businesses, corporates",
    features: [
      "Complex web systems",
      "Unlimited pages/screens",
      "Advanced API integrations",
      "Enterprise security features",
      "Multi-role user management",
      "Advanced reporting & analytics",
      "Cloud infrastructure setup",
      "Load balancing & scaling",
      "6 months support & maintenance",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceDetail: "",
    description: "Tailored solutions for large organizations with unique requirements.",
    idealFor: "Large organizations, government",
    features: [
      "Full-scale platforms",
      "Multi-tenant architecture",
      "24/7 support & monitoring",
      "Dedicated development team",
      "SLA guarantee",
      "Ongoing maintenance & updates",
      "Custom integrations",
      "Compliance & security audits",
      "Training & documentation",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What is included in the project cost?",
    answer: "All prices include design, development, testing, and initial deployment. Ongoing hosting and maintenance may incur additional costs based on your requirements.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline varies based on complexity: Start-Up projects typically take 4-6 weeks, Growth projects 8-12 weeks, and Corporate/Enterprise projects can take 3-6+ months.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we typically structure payments in milestones: 30% upfront, 40% at mid-project, and 30% on completion. Custom arrangements are available for larger projects.",
  },
  {
    question: "What happens after the project is delivered?",
    answer: "All tiers include a support period. After that, we offer maintenance packages for ongoing updates, security patches, and feature enhancements.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="pricing-hero">
        <div className="pricing-hero__orb" />
        <div className="pricing-hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pricing-hero__content"
          >
            <span className="pricing-hero__label">Pricing</span>
            <h1 className="pricing-hero__title">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h1>
            <p className="pricing-hero__subtitle">
              Choose the tier that fits your project scope. All prices are starting points—we'll 
              provide a detailed quote based on your specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pricing-grid">
        <div className="pricing-grid__container">
          <div className="pricing-grid__list">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`pricing-grid__card ${tier.popular ? "pricing-grid__card--popular" : ""}`}
              >
                {tier.popular && (
                  <div className="pricing-grid__popular-badge">Most Popular</div>
                )}
                <div className="pricing-grid__card-header">
                  <h3 className="pricing-grid__card-name">{tier.name}</h3>
                  <div className="pricing-grid__card-price-wrapper">
                    {tier.priceDetail && (
                      <span className="pricing-grid__card-price-detail">{tier.priceDetail}</span>
                    )}
                    <span className="pricing-grid__card-price">{tier.price}</span>
                  </div>
                  <p className="pricing-grid__card-desc">{tier.description}</p>
                  <div className="pricing-grid__card-ideal">
                    Ideal for: {tier.idealFor}
                  </div>
                </div>
                <ul className="pricing-grid__card-features">
                  {tier.features.map((feature) => (
                    <li key={feature} className="pricing-grid__feature">
                      <Check className="w-4 h-4 pricing-grid__feature-icon" />
                      <span className="pricing-grid__feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/quote">Request Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="pricing-faq__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pricing-faq__header"
          >
            <span className="pricing-faq__label">FAQ</span>
            <h2 className="pricing-faq__title">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="pricing-faq__list">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="pricing-faq__item"
              >
                <div className="pricing-faq__item-inner">
                  <HelpCircle className="w-6 h-6 pricing-faq__item-icon" />
                  <div>
                    <h4 className="pricing-faq__question">{faq.question}</h4>
                    <p className="pricing-faq__answer">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-cta">
        <div className="pricing-cta__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pricing-cta__content"
          >
            <h2 className="pricing-cta__title">
              Need a <span className="text-gradient">Custom Quote</span>?
            </h2>
            <p className="pricing-cta__subtitle">
              Use our quote calculator to get an instant estimate, or contact us directly 
              to discuss your specific requirements.
            </p>
            <div className="pricing-cta__actions">
              <Button variant="hero" size="xl" asChild>
                <Link to="/quote">
                  Try Quote Calculator
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
