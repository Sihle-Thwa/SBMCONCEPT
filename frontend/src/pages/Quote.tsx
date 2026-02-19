import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Check } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import "./Quote.css";

const projectTypes = [
  { id: "website", label: "Website", basePrice: 25000 },
  { id: "webapp", label: "Web Application", basePrice: 50000 },
  { id: "ecommerce", label: "E-commerce", basePrice: 75000 },
  { id: "enterprise", label: "Enterprise System", basePrice: 150000 },
];

const features = [
  { id: "auth", label: "User Authentication", price: 10000 },
  { id: "payments", label: "Payment Integration", price: 15000 },
  { id: "api", label: "API Development", price: 20000 },
  { id: "admin", label: "Admin Dashboard", price: 25000 },
  { id: "cms", label: "Content Management", price: 15000 },
  { id: "analytics", label: "Analytics & Reporting", price: 20000 },
  { id: "mobile", label: "Mobile Optimization", price: 10000 },
  { id: "seo", label: "Advanced SEO", price: 8000 },
];

const Quote = () => {
  const [projectType, setProjectType] = useState("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pages, setPages] = useState([5]);
  const [timeline, setTimeline] = useState("standard");

  const calculateEstimate = () => {
    const basePrice = projectTypes.find((p) => p.id === projectType)?.basePrice || 0;
    const featuresPrice = selectedFeatures.reduce((sum, id) => {
      const feature = features.find((f) => f.id === id);
      return sum + (feature?.price || 0);
    }, 0);
    const pagesMultiplier = 1 + (pages[0] - 5) * 0.05;
    const timelineMultiplier = timeline === "rush" ? 1.3 : timeline === "flexible" ? 0.9 : 1;
    
    return Math.round((basePrice + featuresPrice) * pagesMultiplier * timelineMultiplier);
  };

  const estimate = calculateEstimate();

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <Layout>
      <section className="quote-hero">
        <div className="quote-hero__orb" />
        <div className="quote-hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="quote-hero__content"
          >
            <span className="quote-hero__label">Quote Calculator</span>
            <h1 className="quote-hero__title">
              Get an Instant <span className="text-gradient">Estimate</span>
            </h1>
            <p className="quote-hero__subtitle">
              Use our calculator to get a rough estimate for your project. 
              For a detailed quote, our team will review your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="quote-calc">
        <div className="quote-calc__container">
          <div className="quote-calc__grid">
            <div className="quote-calc__form">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="quote-calc__card"
              >
                <h3 className="quote-calc__card-title">Project Type</h3>
                <RadioGroup value={projectType} onValueChange={setProjectType} className="quote-calc__radio-grid">
                  {projectTypes.map((type) => (
                    <div key={type.id} className="relative">
                      <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                      <Label
                        htmlFor={type.id}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                      >
                        <span className="font-medium">{type.label}</span>
                        <span className="text-sm text-muted-foreground">
                          from R{type.basePrice.toLocaleString()}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="quote-calc__card"
              >
                <h3 className="quote-calc__card-title">Features & Add-ons</h3>
                <div className="quote-calc__features-grid">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className={`quote-calc__feature-item ${
                        selectedFeatures.includes(feature.id) ? "quote-calc__feature-item--active" : ""
                      }`}
                      onClick={() => toggleFeature(feature.id)}
                    >
                      <div className="quote-calc__feature-left">
                        <Checkbox
                          checked={selectedFeatures.includes(feature.id)}
                          onCheckedChange={() => toggleFeature(feature.id)}
                        />
                        <span className="quote-calc__feature-label">{feature.label}</span>
                      </div>
                      <span className="quote-calc__feature-price">
                        +R{feature.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="quote-calc__card"
              >
                <h3 className="quote-calc__card-title">
                  Number of Pages/Screens: <span className="highlight">{pages[0]}</span>
                </h3>
                <Slider
                  value={pages}
                  onValueChange={setPages}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="quote-calc__slider-labels">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="quote-calc__card"
              >
                <h3 className="quote-calc__card-title">Timeline</h3>
                <RadioGroup value={timeline} onValueChange={setTimeline} className="quote-calc__radio-grid quote-calc__radio-grid--timeline">
                  {[
                    { id: "flexible", label: "Flexible", desc: "10% discount" },
                    { id: "standard", label: "Standard", desc: "Normal rate" },
                    { id: "rush", label: "Rush", desc: "30% premium" },
                  ].map((option) => (
                    <div key={option.id} className="relative">
                      <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                      <Label
                        htmlFor={option.id}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                      >
                        <span className="font-medium">{option.label + " "}</span>
                        <span className="text-xs text-muted-foreground">{option.desc + " "}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="quote-calc__estimate"
              >
                <div className="quote-calc__estimate-header">
                  <div className="quote-calc__estimate-icon">
                    <Calculator />
                  </div>
                  <h3 className="quote-calc__estimate-title">Your Estimate</h3>
                </div>

                <div className="quote-calc__estimate-body">
                  <div className="quote-calc__estimate-label">Estimated Cost</div>
                  <div className="quote-calc__estimate-value">
                    R{estimate.toLocaleString()}
                  </div>
                  <p className="quote-calc__estimate-note">
                    *This is a rough estimate. Final pricing may vary based on detailed requirements.
                  </p>
                </div>

                <div className="quote-calc__estimate-features">
                  <div className="quote-calc__estimate-feature">
                    <Check className="w-4 h-4" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="quote-calc__estimate-feature">
                    <Check className="w-4 h-4" />
                    <span>Fixed price guarantee</span>
                  </div>
                  <div className="quote-calc__estimate-feature">
                    <Check className="w-4 h-4" />
                    <span>Milestone-based payments</span>
                  </div>
                </div>

                <Button variant="default" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Request Formal Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <p className="quote-calc__estimate-disclaimer">
                  We'll review your requirements and provide a detailed proposal within 48 hours.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
