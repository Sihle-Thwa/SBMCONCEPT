import { useEffect, type ReactNode } from "react"
import { Layout } from "@/components/layout/Layout"
import { Reveal } from "@/lib/Reveal"
import { work } from "@/lib/site-data"
import "./Work.css"

const pageDescription =
	"Projects for government, corporates, private businesses and startups."

const pageMetadata = [
	{ attribute: "name", value: "description", content: pageDescription },
	{ attribute: "property", value: "og:title", content: "Work - SBM Concepts" },
	{ attribute: "property", value: "og:description", content: pageDescription },
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

const caseStudy = [
	{
		title: "Challenge",
		body: "Residents queued in person for service requests and payments, and the billing system was decades old.",
	},
	{
		title: "Solution",
		body: "A citizen portal with a new API layer that integrates the legacy billing system, plus cloud hosting and monitoring.",
	},
	{
		title: "Result",
		body: "Requests and payments available 24/7 online, with staff tracking every case from one dashboard.",
	},
] as const

function Eyebrow({ children }: { children: ReactNode }) {
	return <p className="work-eyebrow">{children}</p>
}

function Work() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = "Work - SBM Concepts"

		const restoreMetadata = pageMetadata.map(({ attribute, value, content }) => {
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
		})

		return () => {
			document.title = previousTitle
			restoreMetadata.forEach((restore) => restore())
		}
	}, [])

	return (
		<Layout>
			<section className="work-hero">
				<div className="work-container">
					<Eyebrow>Work</Eyebrow>
					<h1>
						Projects that
						<br />
						move the needle.
					</h1>
					<p>
						A selection of platforms we&apos;ve engineered across the public
						and private sector.
					</p>
				</div>
			</section>

			<section className="work-projects" aria-label="Selected projects">
				<div className="work-container">
					{work.map((project, index) => (
						<Reveal key={project.title} delay={index * 50}>
							<article className="work-project">
								<div className="work-project__title">
									<p>
										{String(index + 1).padStart(2, "0")}
										<span aria-hidden="true"> · </span>
										{project.sector}
									</p>
									<h2>{project.title}</h2>
								</div>
								<div className="work-project__description">
									<p className="work-project__client">{project.client}</p>
									<p>{project.body}</p>
								</div>
								<ul
									className="work-project__tags"
									aria-label={`${project.title} services`}>
									{project.tags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</ul>
							</article>
						</Reveal>
					))}
				</div>
			</section>

			<section className="work-case-study">
				<div className="work-container">
					<Eyebrow>Case study · National Municipal Services</Eyebrow>
					<h2>
						Taking municipal services online - without replacing what already
						worked.
					</h2>
					<div className="work-case-study__details">
						{caseStudy.map((item) => (
							<div key={item.title}>
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Work
