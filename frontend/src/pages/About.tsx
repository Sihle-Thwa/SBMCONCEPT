import { useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { steps } from "@/lib/site-data"
import { Layout } from "../components/layout/Layout"
import "./About.css"

const values = [
	{
		title: "Engineering first",
		body: "Senior developers on every project. Clean code, tests and documentation are part of the job, not extras.",
	},
	{
		title: "Plain talk",
		body: "No jargon walls. You always know what we're building, why, and what it costs.",
	},
	{
		title: "You own it",
		body: "Your code, your data, your cloud accounts. No lock-in.",
	},
	{
		title: "Built for South Africa",
		body: "We understand local payments, compliance, connectivity and procurement.",
	},
] as const

const compliance = [
	{
		title: "POPIA compliant",
		body: "Personal information handled under the Protection of Personal Information Act.",
	},
	{
		title: "B-BBEE aligned",
		body: "Committed to economic transformation and local skills development.",
	},
	{
		title: "Secure by design",
		body: "OWASP practices, access controls and security reviews on every release.",
	},
] as const

const pageMetadata = [
	{
		attribute: "name",
		value: "description",
		content:
			"A South African engineering consultancy building dependable software.",
	},
	{
		attribute: "property",
		value: "og:title",
		content: "About - SBM Concepts",
	},
	{
		attribute: "property",
		value: "og:description",
		content:
			"A South African engineering consultancy building dependable software.",
	},
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

function About() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = "About - SBM Concepts"

		const restoreMetadata = pageMetadata.map(
			({ attribute, value, content }) => {
				const selector = `meta[${attribute}="${value}"]`
				const existing = document.head.querySelector<HTMLMetaElement>(selector)
				const element = existing ?? document.createElement("meta")
				const previousContent = existing?.getAttribute("content")

				if (!existing) {
					element.setAttribute(attribute, value)
					document.head.append(element)
				}

				element.setAttribute("content", content)

				return () => {
					if (!existing) {
						element.remove()
					} else if (previousContent === null) {
						element.removeAttribute("content")
					} else if (previousContent !== undefined) {
						element.setAttribute("content", previousContent)
					}
				}
			},
		)

		return () => {
			document.title = previousTitle
			restoreMetadata.forEach((restore) => restore())
		}
	}, [])

	return (
		<Layout>
			<section className="about-hero">
				<div className="about-hero__container">
					<motion.div
						className="about-hero__content"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<span className="about-eyebrow">About SBM Concepts</span>
						<h1 className="about-hero__title">
							Engineers who
							<br />
							speak business.
						</h1>
						<p className="about-hero__intro">
							SBM Concepts is a Johannesburg-based programming and web
							development consultancy. We help organisations of every size
							design, build and run the software they depend on.
						</p>
					</motion.div>
				</div>
			</section>

			<section className="about-values" aria-label="Our values">
				<div className="about-container about-values__grid">
					{values.map((value, index) => (
						<motion.article
							key={value.title}
							className="about-value"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.06 }}>
							<h2>{value.title}</h2>
							<p>{value.body}</p>
						</motion.article>
					))}
				</div>
			</section>

			<section className="about-process">
				<div className="about-container">
					<span className="about-eyebrow">Our process</span>
					<ol className="about-process__steps">
						{steps.map((step) => (
							<li className="about-process__step" key={step.no}>
								<span className="about-process__number">{step.no}</span>
								<h2>{step.title}</h2>
								<p>{step.body}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="about-compliance">
				<div className="about-container">
					<span className="about-eyebrow">Compliance &amp; standards</span>
					<div className="about-compliance__grid">
						{compliance.map((item, index) => (
							<motion.article
								className="about-compliance__card"
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.06 }}>
								<h2>{item.title}</h2>
								<p>{item.body}</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section className="about-cta">
				<div className="about-container about-cta__content">
					<h2>
						Have a project in mind? <span>Let&apos;s talk.</span>
					</h2>
					<p>
						Tell us what you&apos;re building and we&apos;ll discuss the next
						steps.
					</p>
					<div className="about-cta__actions">
						<Button variant="hero" size="xl" asChild>
							<Link to="/contact">
								Start a conversation
								<ArrowRight aria-hidden="true" className="w-5 h-5" />
							</Link>
						</Button>
						<Button variant="outline" size="xl" asChild>
							<Link to="/portfolio">View our work</Link>
						</Button>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default About
