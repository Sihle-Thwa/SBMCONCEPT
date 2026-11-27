import { useEffect, type ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowUpRight, Check } from "lucide-react"
import { Layout } from "@/components/layout/Layout"
import { Reveal } from "@/lib/Reveal"
import { sectors, services, stack } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import "./Services.css"

const pageDescription =
	"Frontend, backend, API, database, cloud and DevOps, and integration services."

const pageMetadata = [
	{ attribute: "name", value: "description", content: pageDescription },
	{
		attribute: "property",
		value: "og:title",
		content: "Services - SBM Concepts",
	},
	{ attribute: "property", value: "og:description", content: pageDescription },
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

function Eyebrow({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return <p className={cn("services-eyebrow", className)}>{children}</p>
}

function Services() {
	const location = useLocation()

	useEffect(() => {
		const previousTitle = document.title
		document.title = "Services - SBM Concepts"

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

	useEffect(() => {
		if (!location.hash) return

		document.getElementById(location.hash.slice(1))?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}, [location.hash])

	return (
		<Layout>
			<section className="services-hero">
				<div className="services-container">
					<Eyebrow>Services</Eyebrow>
					<h1>
						Six disciplines.
						<br />
						One engineering team.
					</h1>
					<p className="services-hero__intro">
						Hire us for a single layer of your stack or the whole thing. Every
						engagement comes with senior engineers, clear scope and
						documentation you own.
					</p>
				</div>
			</section>

			<section className="services-list" aria-label="Our services">
				<div className="services-container">
					{services.map((service) => (
						<article
							key={service.slug}
							id={service.slug}
							className="service-item">
							<span className="service-item__number">{service.no}</span>
							<Reveal>
								<div>
									<h2>{service.title}</h2>
									<p>{service.summary}</p>
								</div>
							</Reveal>
							<Reveal delay={100}>
								<ul className="service-item__points">
									{service.points.map((point) => (
										<li key={point}>
											<Check aria-hidden="true" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</Reveal>
						</article>
					))}
				</div>
			</section>

			<section className="services-details">
				<div className="services-container">
					<Eyebrow>Industries &amp; clients</Eyebrow>
					<div className="services-sectors">
						{sectors.map((sector) => (
							<article className="services-sector" key={sector.title}>
								<h2>{sector.title}</h2>
								<p>{sector.body}</p>
							</article>
						))}
					</div>

					<Eyebrow className="services-stack__eyebrow">
						Technology we use
					</Eyebrow>
					<ul className="services-stack" aria-label="Technology stack">
						{stack.map((technology) => (
							<li key={technology}>{technology}</li>
						))}
					</ul>

					<Link to="/quote" className="services-estimate-link">
						Estimate your project
						<ArrowUpRight aria-hidden="true" />
					</Link>
				</div>
			</section>
		</Layout>
	)
}

export default Services
