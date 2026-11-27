import { useEffect, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Layout } from "@/components/layout/Layout"
import { Reveal } from "@/lib/Reveal"
import { sectors, services, stack, steps, work } from "@/lib/site-data"
import "./Index.css"

const pageDescription =
	"Johannesburg programming and web development consultancy: frontend, backend, APIs, databases, cloud and integrations for government, corporates, SMEs and startups."

const pageMetadata = [
	{ attribute: "name", value: "description", content: pageDescription },
	{
		attribute: "property",
		value: "og:title",
		content: "SBM Concepts - Software that runs your business",
	},
	{
		attribute: "property",
		value: "og:description",
		content:
			"Frontend, backend, APIs, databases, cloud and integrations for government, corporates, SMEs and startups.",
	},
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

function Eyebrow({ children }: { children: ReactNode }) {
	return <p className="home-eyebrow">{children}</p>
}

function Index() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = "SBM Concepts - Software that runs your business"

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
			<section className="home-hero">
				<div className="home-container home-hero__content">
					<h1 className="home-hero__title">
						We engineer
						<br />
						software that
						<br />
						<span>runs</span> your business.
					</h1>
					<div className="home-hero__summary">
						<p>
							Frontend, backend, APIs, databases, cloud and integrations -
							designed, built and supported for government, corporates, private
							businesses and startups.
						</p>
						<div className="home-hero__actions">
							<Link to="/contact" className="home-button home-button--primary">
								Start a project
								<ArrowUpRight aria-hidden="true" />
							</Link>
							<Link to="/quote" className="home-button home-button--outline">
								Get an estimate
							</Link>
						</div>
					</div>
				</div>

				<div className="home-tech" role="group" aria-label="Technology stack">
					<div className="home-tech__track">
						{[...stack, ...stack].map((technology, index) => (
							<span
								className="home-tech__item"
								key={`${technology}-${index}`}
								aria-hidden={index >= stack.length}>
								{technology}
								<span className="home-tech__spark" aria-hidden="true">
									✦
								</span>
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="home-section home-services">
				<div className="home-container">
					<div className="home-section__intro">
						<Eyebrow>What we do</Eyebrow>
						<Reveal>
							<h2>
								Full-stack engineering, from the first screen to the last
								server.
							</h2>
						</Reveal>
					</div>
					<div className="home-services__list">
						{services.map((service, index) => (
							<Reveal key={service.slug} delay={index * 40}>
								<Link to="/services" className="home-service">
									<span className="home-service__number">{service.no}</span>
									<h3>{service.title}</h3>
									<p>{service.summary}</p>
									<ArrowUpRight
										aria-hidden="true"
										className="home-service__arrow"
									/>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="home-section">
				<div className="home-container">
					<Eyebrow>Who we work with</Eyebrow>
					<h2 className="home-sectors__title">
						One team for every scale of ambition.
					</h2>
					<div className="home-sectors__grid">
						{sectors.map((sector, index) => (
							<Reveal
								key={sector.title}
								delay={index * 80}
								className="home-sector">
								<span className="home-sector__number">0{index + 1}</span>
								<h3>{sector.title}</h3>
								<p>{sector.body}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="home-section home-work">
				<div className="home-container">
					<div className="home-work__heading">
						<div>
							<Eyebrow>Selected work</Eyebrow>
							<h2>Built to ship. Built to last.</h2>
						</div>
						<Link to="/portfolio" className="home-work__all">
							All projects
							<ArrowRight aria-hidden="true" />
						</Link>
					</div>
					<div className="home-work__grid">
						{work.slice(0, 4).map((project, index) => (
							<Reveal key={project.title} delay={index * 80}>
								<article className="home-work-card">
									<div className="home-work-card__meta">
										<span>{project.sector}</span>
										<span>{project.client}</span>
									</div>
									<div className="home-work-card__content">
										<h3>{project.title}</h3>
										<p>{project.body}</p>
										<div className="home-work-card__tags">
											{project.tags.map((tag) => (
												<span key={tag}>{tag}</span>
											))}
										</div>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="home-process">
				<div className="home-container">
					<Eyebrow>How we work</Eyebrow>
					<h2>A clear process, no surprises.</h2>
					<ol className="home-process__steps">
						{steps.map((step, index) => (
							<li key={step.no}>
								<Reveal delay={index * 80}>
									<div className="home-process__step">
										<span>{step.no}</span>
										<h3>{step.title}</h3>
										<p>{step.body}</p>
									</div>
								</Reveal>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="home-stats">
				<div className="home-container home-stats__grid">
					{[
						["6", "Core service lines"],
						["4", "Client segments served"],
						["2-week", "Sprint cycles"],
						["100%", "POPIA-compliant builds"],
					].map(([value, label]) => (
						<Reveal key={label}>
							<div className="home-stat">
								<p>{value}</p>
								<span>{label}</span>
							</div>
						</Reveal>
					))}
				</div>
			</section>
		</Layout>
	)
}

export default Index
