import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import "./Contact.css";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="contact-hero">
        <div className="contact-hero__orb" />
        <div className="contact-hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-hero__content"
          >
            <span className="contact-hero__label">Contact Us</span>
            <h1 className="contact-hero__title">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="contact-hero__subtitle">
              Have a project in mind? Get in touch with us and let's discuss 
              how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section__container">
          <div className="contact-section__grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="contact-section__info"
            >
              <div className="contact-section__info-card">
                <div className="contact-section__info-card-inner">
                  <div className="contact-section__info-icon">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="contact-section__info-title">Email</h4>
                    <a href="mailto:info@sbmconcepts.co.za" className="contact-section__info-value">
                      info@sbmconcepts.co.za
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-section__info-card">
                <div className="contact-section__info-card-inner">
                  <div className="contact-section__info-icon">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="contact-section__info-title">Phone</h4>
                    <a href="tel:+27123456789" className="contact-section__info-value">
                      +27 12 345 6789
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-section__info-card">
                <div className="contact-section__info-card-inner">
                  <div className="contact-section__info-icon">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="contact-section__info-title">Office</h4>
                    <p className="contact-section__info-value">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-section__hours">
                <h4 className="contact-section__hours-title">Business Hours</h4>
                <div className="contact-section__hours-list">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-section__form-wrapper"
            >
              {isSubmitted ? (
                <div className="contact-section__success">
                  <div className="contact-section__success-icon">
                    <CheckCircle2 />
                  </div>
                  <h3 className="contact-section__success-title">Thank You!</h3>
                  <p className="contact-section__success-desc">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-section__form">
                  <h3 className="contact-section__form-title">Send us a Message</h3>
                  
                  <div className="contact-section__form-grid">
                    <div className="contact-section__form-field">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="contact-section__form-field">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                    <div className="contact-section__form-field">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="contact-section__form-field">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+27 12 345 6789"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="contact-section__form-field">
                      <Label htmlFor="service">Service Required</Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="software">Software Development</SelectItem>
                          <SelectItem value="devops">DevOps & Cloud</SelectItem>
                          <SelectItem value="consulting">IT Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="contact-section__form-field">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25k-50k">R25,000 - R50,000</SelectItem>
                          <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                          <SelectItem value="100k-250k">R100,000 - R250,000</SelectItem>
                          <SelectItem value="250k+">R250,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="contact-section__form-field contact-section__form-message">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
