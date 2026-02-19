import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./PricingPreview.css";

const pricingTiers = [
  {
    name: "Start-Up",
    price: "R25,000",
    priceDetail: "from",
    description: "Perfect for small businesses and MVPs",
    features: [
      "Basic website or app",
      "Up to 5 pages",
      "Mobile responsive",
      "Basic SEO",
      "30 days support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "R75,000",
    priceDetail: "from",
    description: "For growing businesses ready to scale",
    features: [
      "Custom web application",
      "Up to 15 pages",
      "User authentication",
      "Database integration",
      "90 days support",
      "Performance optimization",
    ],
    popular: true,
  },
  {
    name: "Corporate",
    price: "R200,000",
    priceDetail: "from",
    description: "Enterprise solutions for established businesses",
    features: [
      "Complex web systems",
      "Unlimited pages",
      "API integrations",
      "Advanced security",
      "6 months support",
      "Cloud infrastructure",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceDetail: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Full-scale platforms",
      "Multi-tenant systems",
      "24/7 support",
      "Dedicated team",
      "SLA guarantee",
      "Ongoing maintenance",
    ],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="pricing-preview">
      <div className="pricing-preview__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pricing-preview__header"
        >
          <span className="pricing-preview__label">
            Pricing
          </span>
          <h2 className="pricing-preview__title">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="pricing-preview__subtitle">
            Choose the tier that fits your project. All prices are starting points—we'll 
            provide a detailed quote based on your specific requirements.
          </p>
        </motion.div>

        <div className="pricing-preview__grid">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`pricing-preview__card ${tier.popular ? "pricing-preview__card--popular" : ""}`}
            >
              {tier.popular && (
                <div className="pricing-preview__popular-badge">
                  Most Popular
                </div>
              )}
              <div className="pricing-preview__card-header">
                <h3 className="pricing-preview__card-name">{tier.name}</h3>
                <div className="pricing-preview__card-price-wrapper">
                  {tier.priceDetail && (
                    <span className="pricing-preview__card-price-detail">{tier.priceDetail}</span>
                  )}
                  <span className="pricing-preview__card-price">{tier.price}</span>
                </div>
                <p className="pricing-preview__card-desc">{tier.description}</p>
              </div>
              <ul className="pricing-preview__card-features">
                {tier.features.map((feature) => (
                  <li key={feature} className="pricing-preview__feature">
                    <Check className="w-4 h-4 pricing-preview__feature-icon" />
                    <span className="pricing-preview__feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/quote">Get Quote</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pricing-preview__footer"
        >
          <Button variant="link" asChild>
            <Link to="/pricing" className="text-primary">
              View full pricing details
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
