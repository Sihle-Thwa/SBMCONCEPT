import { useEffect, useState, type FormEvent } from "react"
import { toast } from "sonner"
import { contact, services } from "@/lib/site-data"
import { Layout } from "../components/layout/Layout"
import "./Contact.css"

const pageDescription =
	"Tell us about your project and we'll get back to you within one business day."

const pageMetadata = [
	{ attribute: "name", value: "description", content: pageDescription },
	{ attribute: "property", value: "og:title", content: "Contact - SBM Concepts" },
	{ attribute: "property", value: "og:description", content: pageDescription },
	{ attribute: "property", value: "og:type", content: "website" },
	{
		attribute: "name",
		value: "twitter:card",
		content: "summary_large_image",
	},
] as const

function Contact() {
	const [sent, setSent] = useState(false)

	useEffect(() => {
		const previousTitle = document.title
		document.title = "Contact - SBM Concepts"

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

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setSent(true)
		toast.info("This contact form is not connected yet. No message was sent.")
	}

	return (
		<Layout>
			<section className="contact-hero">
				<div className="contact-container">
					<span className="contact-eyebrow">Contact</span>
					<h1>
						Let&apos;s build
						<br />
						something solid.
					</h1>
					<p>
						Tell us a little about your project. We reply within one business
						day.
					</p>
				</div>
			</section>

			<section className="contact-section">
				<div className="contact-container contact-section__grid">
					<div className="contact-details">
						<div className="contact-detail">
							<p>Email</p>
							<a href={`mailto:${contact.email}`}>{contact.email}</a>
						</div>
						<div className="contact-detail">
							<p>Office</p>
							<span>{contact.location}</span>
						</div>
					</div>

					{sent ?
						<div className="contact-notice" role="status">
							<h2>Form not connected yet.</h2>
							<p>
								No message was sent. Please email us at{" "}
								<a href={`mailto:${contact.email}`}>{contact.email}</a>.
							</p>
							<button
								type="button"
								className="contact-secondary-button"
								onClick={() => setSent(false)}>
								Return to the form
							</button>
						</div>
					:	<form className="contact-form" onSubmit={handleSubmit}>
							<label className="contact-field">
								<span>Name *</span>
								<input
									required
									name="name"
									autoComplete="name"
									placeholder="Your name"
								/>
							</label>

							<label className="contact-field">
								<span>Email *</span>
								<input
									required
									type="email"
									name="email"
									autoComplete="email"
									placeholder="you@example.com"
								/>
							</label>

							<label className="contact-field">
								<span>Organisation</span>
								<input
									name="organisation"
									autoComplete="organization"
									placeholder="Your organisation"
								/>
							</label>

							<label className="contact-field">
								<span>Organisation type</span>
								<select name="organisationType" defaultValue="Startup">
									<option>Startup</option>
									<option>Private business</option>
									<option>Corporate</option>
									<option>Government</option>
								</select>
							</label>

							<label className="contact-field contact-field--wide">
								<span>Service needed</span>
								<select name="service" defaultValue="">
									<option value="" disabled>
										Select a service
									</option>
									{services.map((service) => (
										<option key={service.slug} value={service.slug}>
											{service.title}
										</option>
									))}
									<option value="not-sure">Not sure yet</option>
								</select>
							</label>

							<label className="contact-field contact-field--wide">
								<span>Project details *</span>
								<textarea
									required
									name="message"
									rows={4}
									placeholder="Tell us what you are looking to build."
								/>
							</label>

							<p className="contact-form__disclaimer">
								This form is a demo and does not send or store submissions yet.
							</p>
							<button className="contact-submit" type="submit">
								Send message
							</button>
						</form>
					}
				</div>
			</section>
		</Layout>
	)
}

export default Contact
