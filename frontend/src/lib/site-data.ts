export const services = [
	{
		slug: "frontend",
		no: "01",
		title: "Frontend Development",
		summary:
			"Fast, accessible interfaces your users enjoy — websites, web apps, portals and dashboards.",
		points: [
			"React, Next.js & TanStack",
			"Design systems & UI engineering",
			"Progressive Web Apps",
			"Performance & accessibility (WCAG)",
		],
	},
	{
		slug: "backend",
		no: "02",
		title: "Backend Engineering",
		summary:
			"Secure, scalable server systems that carry your business logic reliably at any load.",
		points: [
			"Node.js, .NET, Python & Go",
			"Authentication & role-based access",
			"Background jobs & queues",
			"Legacy system modernisation",
		],
	},
	{
		slug: "apis",
		no: "03",
		title: "API Development",
		summary:
			"Well-documented REST and GraphQL APIs that connect your products, partners and teams.",
		points: [
			"REST & GraphQL design",
			"OpenAPI documentation",
			"Versioning & rate limiting",
			"Partner & public APIs",
		],
	},
	{
		slug: "database",
		no: "04",
		title: "Database Design",
		summary:
			"Data models built for integrity, speed and growth — from first schema to migration.",
		points: [
			"PostgreSQL, SQL Server & MySQL",
			"MongoDB & Redis",
			"Query tuning & indexing",
			"Data migration & backups",
		],
	},
	{
		slug: "cloud",
		no: "05",
		title: "Cloud & DevOps",
		summary:
			"Infrastructure that deploys itself, scales on demand and keeps running when it matters.",
		points: [
			"AWS, Azure & Google Cloud",
			"Docker & Kubernetes",
			"CI/CD pipelines",
			"Monitoring & cost control",
		],
	},
	{
		slug: "integrations",
		no: "06",
		title: "Integration Services",
		summary:
			"Make your systems talk — payments, ERPs, CRMs, government platforms and third-party tools.",
		points: [
			"Payment gateways (PayFast, Yoco, Stripe)",
			"ERP & CRM (SAP, Sage, Salesforce)",
			"Webhooks & event pipelines",
			"SSO & identity providers",
		],
	},
] as const

export const sectors = [
	{
		title: "Government & Public Sector",
		body: "Citizen portals, internal systems and secure integrations delivered with POPIA compliance and procurement-ready documentation.",
	},
	{
		title: "Corporates & Enterprise",
		body: "Modernise legacy platforms, extend your teams and integrate the systems your departments rely on.",
	},
	{
		title: "Private Businesses & SMEs",
		body: "Websites, booking and e-commerce platforms, and custom tools that remove manual work.",
	},
	{
		title: "Startups & Founders",
		body: "From idea to MVP to scale — lean builds that let you test the market and raise with confidence.",
	},
] as const

export const stack = [
	"React",
	"TypeScript",
	"Next.js",
	"Node.js",
	".NET",
	"Python",
	"PostgreSQL",
	"MongoDB",
	"GraphQL",
	"AWS",
	"Azure",
	"Google Cloud",
	"Docker",
	"Kubernetes",
	"Terraform",
	"Redis",
] as const

export const steps = [
	{
		no: "01",
		title: "Discover",
		body: "Workshops to understand your goals, users and constraints. You get a clear scope and estimate.",
	},
	{
		no: "02",
		title: "Design",
		body: "Architecture, data models and interface design signed off before a line of production code.",
	},
	{
		no: "03",
		title: "Build",
		body: "Two-week sprints with working demos, so you see progress and steer as we go.",
	},
	{
		no: "04",
		title: "Launch & Support",
		body: "Automated deployment, monitoring and ongoing support to keep your platform healthy.",
	},
] as const

export const work = [
	{
		client: "National Municipal Services",
		sector: "Government",
		title: "Municipal Sanitation & Water Portal",
		body: "GIS-enabled platform for municipal water and sanitation infrastructure: GIS, asset lifecycle, maintenance, demand management and compliance reporting for South African municipalities.",
		tags: [
			"GIS",
			"Backend",
			"GRAP",
			"mSCOA",
			"MFMA",
			"Backend",
			"Frontend",
			"APIs",
			"Integration",
		],
	},
	{
		client: "Dawn-Analytics",
		sector: "Private",
		title: "Financial Education Platform",
		body: "Platform is a comprehensive, modern web application designed to help South African households manage, understand, and strategically pay off their debt.",
		tags: [
			"Finance",
			"FinTech",
			"Education",
			"AI Integration",
			"Integration",
			"Frontend",
			"Backend",
		],
	},
	{
		client: "Open Shop",
		sector: "Private",
		title: "E-commerce platform for luxury fashion",
		body: "OpenShop is a modern e-commerce web application built for selling luxury fashion and accessories at discounted prices.",
		tags: [
			"E-commerce",
			"Frontend",
			"Backend",
			"Integration",
			"Database",
			"Authentication",
			"API Development",
			"Cloud Infrastructure",
		],
	},
	{
		client: "EasyOps",
		sector: "Private Corporate",
		title: "Workforce Management System",
		body: "EasyOps is a cloud-native workforce management platform purpose-built for South African (and African) organisations operating across multiple sites and shift patterns.",
		tags: [
			"Workforce Management",
			"Frontend",
			"Backend",
			"Database",
			"Integration",
			"Authentication",
			"API Development",
			"Automation",
		],
	},
] as const

export const pricing = [
	{
		name: "SME Starter",
		price: "R25,000",
		from: true,
		for: "Startups, founders & MVPs",
		features: [
			"Website or small web app",
			"Up to 5 pages/screens",
			"Responsive design & basic SEO",
			"Contact form integration",
			"30 days post-launch support",
		],
	},
	{
		name: "SME Growth",
		price: "R75,000",
		from: true,
		for: "SMEs & growing startups",
		features: [
			"Custom web application",
			"Up to 15 pages/screens",
			"Backend & database",
			"Third-party integrations",
			"90 days post-launch support",
		],
		popular: true,
	},
	{
		name: "SME Enterprise ",
		price: "R200,000",
		from: true,
		for: "Established businesses",
		features: [
			"Complex systems & portals",
			"API development",
			"Cloud infrastructure & CI/CD",
			"Security review",
			"6 months support",
		],
	},
	{
		name: "Enterprise & Government",
		price: "Custom",
		from: false,
		for: "Large organisations & government",
		features: [
			"Enterprise architecture",
			"Legacy modernisation",
			"Dedicated team",
			"SLA-backed support",
			"Compliance documentation",
		],
	},
] as const

export const contact = {
	email: "admin@sbmconcepts.com",
	location: "Johannesburg, South Africa",
}
