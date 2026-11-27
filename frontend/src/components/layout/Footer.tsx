import { Link } from "react-router-dom"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import "./Footer.css"
import { services } from "../../lib/site-data"

const companyLinks = [
	{ label: "About", to: "/about" },
	{ label: "Work", to: "/work" },
	{ label: "Pricing", to: "/pricing" },
	{ label: "Estimate calculator", to: "/quote" },
]

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__cta">
					<h2 className="footer__headline">
						Got a system to build? <span>Let&apos;s talk.</span>
					</h2>
					<Link to="/contact" className="footer__project-link">
						Start a project
						<ArrowUpRight aria-hidden="true" className="footer__project-icon" />
					</Link>
				</div>

				<div className="footer__grid">
					<div className="footer__brand">
						<Link to="/" className="footer__logo">
							<img
								src="/Logomark.png"
								alt="SBM Concepts Logo"
								width="32"
								height="32"
								className="navbar__logo"
							/>
							<span className="navbar__brand-name">SBM Concepts</span>
						</Link>
						<p className="footer__description">
							Technology consulting and digital delivery for organizations
							seeking modern software, web, and cloud solutions.
						</p>
					</div>

					<div>
						<h3 className="footer__section-title">Services</h3>
						<ul className="footer__link-list">
							{services.map((service) => (
								<li key={service.slug}>
									<Link
										to={`/services#${service.slug}`}
										className="footer__link">
										{service.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="footer__section-title">Company</h3>
						<ul className="footer__link-list">
							{companyLinks.map((link) => (
								<li key={link.to}>
									<Link to={link.to} className="footer__link">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="footer__section-title">Contact</h3>
						<ul className="footer__link-list footer__contact-list">
							<li className="footer__contact-item">
								<Mail aria-hidden="true" className="footer__contact-icon" />
								<a
									href="mailto:admin@sbmconcepts.com"
									className="footer__contact-link">
									admin@sbmconcepts.com
								</a>
							</li>

							<li className="footer__contact-item">
								<MapPin aria-hidden="true" className="footer__contact-icon" />
								<span>Johannesburg, South Africa</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer__bottom">
					<p className="footer__copyright">
						&copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.
					</p>
					<p className="footer__compliance">
						POPIA compliant <span aria-hidden="true">&middot;</span> B-BBEE
						aligned
					</p>
				</div>
			</div>
		</footer>
	)
}
