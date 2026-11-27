import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { Layout } from "@/components/layout/Layout"
import { estimate, formatRand, projectTypes, quoteFeatures, type Timeline } from "@/lib/quote"
import { cn } from "@/lib/utils"
import "./Quote.css"

const timelines: { id: Timeline; label: string; note: string }[] = [
	{ id: "flexible", label: "Flexible", note: "-10%" },
	{ id: "standard", label: "Standard", note: "" },
	{ id: "rush", label: "Rush", note: "+30%" },
]

const pageDescription =
	"Get an instant indicative estimate for your website, web app or system."

const pageMetadata = [
	{ attribute: "name", value: "description", content: pageDescription },
	{
		attribute: "property",
		value: "og:title",
		content: "Project estimate calculator - SBM Concepts",
	},
	{ attribute: "property", value: "og:description", content: pageDescription },
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

function Quote() {
	const [type, setType] = useState("website")
	const [features, setFeatures] = useState<string[]>([])
	const [pages, setPages] = useState(5)
	const [timeline, setTimeline] = useState<Timeline>("standard")
	const total = estimate(type, features, pages, timeline)

	useEffect(() => {
		const previousTitle = document.title
		document.title = "Project estimate calculator - SBM Concepts"

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

	const optionClass = (selected: boolean) =>
		cn("quote-option", selected && "quote-option--active")

	const toggleFeature = (featureId: string) => {
		setFeatures((current) =>
			current.includes(featureId) ?
				current.filter((id) => id !== featureId)
			:	[...current, featureId],
		)
	}

	return (
		<Layout>
			<section className="quote-hero">
				<div className="quote-container">
					<p className="quote-eyebrow">Estimate calculator</p>
					<h1>
						What will it
						<br />
						cost to build?
					</h1>
					<p className="quote-hero__intro">
						Pick what you need for a rough figure in seconds. It&apos;s
						indicative only; we&apos;ll confirm a formal quote after a short
						discovery call.
					</p>
				</div>
			</section>

			<section className="quote-section">
				<div className="quote-container quote-layout">
					<div className="quote-controls">
						<fieldset className="quote-fieldset">
							<legend>1. Project type</legend>
							<div className="quote-options quote-options--projects">
								{projectTypes.map((project) => (
									<button
										key={project.id}
										type="button"
										aria-pressed={type === project.id}
										onClick={() => setType(project.id)}
										className={optionClass(type === project.id)}>
										{project.label}
										<span>from {formatRand(project.basePrice)}</span>
									</button>
								))}
							</div>
						</fieldset>

						<fieldset className="quote-fieldset">
							<legend>2. Features</legend>
							<div className="quote-options quote-options--features">
								{quoteFeatures.map((feature) => {
									const selected = features.includes(feature.id)

									return (
										<button
											key={feature.id}
											type="button"
											aria-pressed={selected}
											onClick={() => toggleFeature(feature.id)}
											className={optionClass(selected)}>
											{feature.label}
											<span>+{formatRand(feature.price)}</span>
										</button>
									)
								})}
							</div>
						</fieldset>

						<fieldset className="quote-fieldset">
							<legend>3. Pages or screens: {pages}</legend>
							<input
								aria-label="Pages or screens"
								type="range"
								min={1}
								max={50}
								value={pages}
								onChange={(event) => setPages(Number(event.target.value))}
								className="quote-range"
							/>
							<div className="quote-range__labels">
								<span>1</span>
								<span>50</span>
							</div>
						</fieldset>

						<fieldset className="quote-fieldset">
							<legend>4. Timeline</legend>
							<div className="quote-options quote-options--timelines">
								{timelines.map((option) => (
									<button
										key={option.id}
										type="button"
										aria-pressed={timeline === option.id}
										onClick={() => setTimeline(option.id)}
										className={optionClass(timeline === option.id)}>
										{option.label}
										<span>{option.note || "Base"}</span>
									</button>
								))}
							</div>
						</fieldset>
					</div>

					<aside className="quote-estimate" aria-label="Indicative estimate">
						<p className="quote-estimate__label">Indicative estimate</p>
						<p
							className="quote-estimate__total"
							data-testid="estimate"
							aria-live="polite">
							{formatRand(total)}
						</p>
						<p className="quote-estimate__vat">Excl. VAT</p>
						<Link to="/contact" className="quote-estimate__link">
							Request a formal quote
							<ArrowUpRight aria-hidden="true" />
						</Link>
					</aside>
				</div>
			</section>
		</Layout>
	)
}

export default Quote
