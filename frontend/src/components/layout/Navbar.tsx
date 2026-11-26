import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ArrowUpRight, Menu, X } from "lucide-react"
import "./Navbar.css"

const navLinks = [
	{ to: "/services", label: "Services" },
	{ to: "/portfolio", label: "Work" },
	{ to: "/about", label: "About" },
	{ to: "/pricing", label: "Pricing" },
] as const

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = () => setIsOpen(false)

	return (
		<header className="navbar">
			<div className="navbar__container">
				<Link to="/" className="navbar__brand" onClick={closeMenu}>
					<img
						src="/Logomark.png"
						alt=""
						width="32"
						height="32"
						className="navbar__logo"
					/>
					<span className="navbar__brand-name">SBM Concepts</span>
				</Link>

				<nav aria-label="Primary navigation" className="navbar__links">
					{navLinks.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={({ isActive }) =>
								`navbar__link${isActive ? " navbar__link--active" : ""}`
							}>
							{link.label}
						</NavLink>
					))}
				</nav>

				<div className="navbar__actions">
					<Link to="/quote" className="navbar__estimate-link">
						Get an estimate
					</Link>
					<Link to="/contact" className="navbar__project-link">
						Start a project
						<ArrowUpRight aria-hidden="true" className="navbar__project-icon" />
					</Link>
				</div>

				<button
					type="button"
					className="navbar__mobile-toggle"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					aria-controls="navbar-mobile-menu"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ?
						<X aria-hidden="true" />
					:	<Menu aria-hidden="true" />}
				</button>
			</div>

			<nav
				id="navbar-mobile-menu"
				aria-label="Mobile navigation"
				className="navbar__mobile-menu"
				hidden={!isOpen}>
				{navLinks.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						onClick={closeMenu}
						className={({ isActive }) =>
							`navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
						}>
						{link.label}
					</NavLink>
				))}
				<Link to="/quote" onClick={closeMenu} className="navbar__mobile-link">
					Get an estimate
				</Link>
				<Link to="/contact" onClick={closeMenu} className="navbar__mobile-link">
					Start a project
				</Link>
			</nav>
		</header>
	)
}
