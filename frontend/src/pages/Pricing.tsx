import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { Layout } from "@/components/layout/Layout"
import { pricing } from "@/lib/site-data"
import "./Pricing.css"

const pageDescription =
	"Indicative pricing for websites, web applications, corporate systems and enterprise projects."

const pageMetadata = [
	{ attribute: "name", value: "description", content: pageDescription },
	{
		attribute: "property",
		value: "og:title",
		content: "Pricing - SBM Concepts",
	},
	{ attribute: "property", value: "og:description", content: pageDescription },
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

function Pricing() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = "Pricing - SBM Concepts"

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
			<section className="pricing-hero">
				<div className="pricing-container">
					<p className="pricing-eyebrow">Pricing</p>
					<h1>
						Transparent
						<br />
						starting points.
					</h1>
					<p className="pricing-hero__intro">
						Every project is scoped individually. These tiers show where most
						engagements begin. Prices exclude VAT.
					</p>
				</div>
			</section>

			<section className="pricing-section" aria-label="Project pricing tiers">
				<div className="pricing-container">
					<div className="pricing-grid">
						{pricing.map((tier) => {
							const isPopular = "popular" in tier && tier.popular === true

							return (
								<article
									className={`pricing-card${isPopular ? " pricing-card--popular" : ""}`}
									key={tier.name}>
									<div className="pricing-card__heading">
										<h2>{tier.name}</h2>
										{isPopular && (
											<span className="pricing-card__badge">Popular</span>
										)}
									</div>
									<p className="pricing-card__audience">{tier.for}</p>
									<p className="pricing-card__price">
										{tier.from && (
											<span className="pricing-card__from">from</span>
										)}
										{tier.price}
									</p>
									<ul className="pricing-card__features">
										{tier.features.map((feature) => (
											<li key={feature}>
												<Check
													aria-hidden="true"
													className="pricing-card__check"
												/>
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<Link
										to={tier.from ? "/quote" : "/contact"}
										className="pricing-card__link">
										{tier.from ? "Estimate my project" : "Talk to us"}
									</Link>
								</article>
							)
						})}
					</div>
					<p className="pricing-disclaimer">
						All prices are indicative starting points, exclude VAT, and are
						subject to a detailed project scope.
					</p>
				</div>
			</section>
		</Layout>
	)
}

export default Pricing
