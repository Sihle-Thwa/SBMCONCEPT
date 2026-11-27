import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Globe, Code2, Cloud, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/hero-bg.jpg"
import "./Hero.css"

export function Hero() {
	return (
		<section className="hero">
			<div className="hero__bg">
				<img
					src={heroBg}
					alt="Technology background"
					className="hero__bg-image"
				/>
				<div className="hero__bg-overlay" />
			</div>

			<div className="hero__orb hero__orb--primary" />
			<div className="hero__orb hero__orb--accent" />

			<div className="hero__container">
				<div className="hero__content">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<span className="hero__badge">
							<span className="hero__badge-dot" />
							Enterprise Software Solutions
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="hero__title">
						Enterprise-grade{" "}
						<span className="text-gradient">Web & Software</span> Solutions
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="hero__subtitle">
						We transform complex business challenges into elegant digital
						solutions. From custom software development to cloud infrastructure,
						we deliver results that drive growth.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="hero__actions">
						<Button variant="hero" size="xl" asChild>
							<Link to="/quote">Get a Quote</Link>
						</Button>
						<Button variant="outline" size="xl" asChild>
							<Link to="/services">View Services</Link>
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="hero__stats">
						{[
							{ icon: Globe, label: "Projects Delivered", value: "150+" },
							{ icon: Code2, label: "Lines of Code", value: "2M+" },
							{ icon: Cloud, label: "Cloud Deployments", value: "500+" },
							{ icon: Users, label: "Happy Clients", value: "80+" },
						].map((stat) => (
							<div key={stat.label} className="hero__stat">
								<stat.icon className="w-6 h-6 hero__stat-icon" />
								<div className="hero__stat-value">{stat.value}</div>
								<div className="hero__stat-label">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}
