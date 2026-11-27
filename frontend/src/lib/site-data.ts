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

export const websiteCaseStudies = [
	{
		client: "Dawn Analytics",
		sector: "Financial technology",
		title: "Private debt planning for South Africans",
		body: "A browser-based debt planning tool that compares repayment strategies in Rands, without bank connections or an account.",
		tags: ["Web application", "Financial tools", "Privacy"],
		url: "https://www.dawn-analytics.com/",
		sections: [
			{
				title: "Context",
				body: "Working professionals and small entrepreneurs need a clear way to understand their debts and compare repayment options in a South African context.",
			},
			{
				title: "Platform",
				body: "The Dawn-Debt Tool compares avalanche, snowball and consolidation strategies using balances, interest rates and minimum payments. Calculations run locally in the browser, without sharing bank logins or requiring sign-up.",
			},
			{
				title: "Experience",
				body: "Users can compare interest costs and debt-free dates side by side in ZAR. The tool supports informed planning and is educational, rather than a replacement for an NCR-registered debt counsellor.",
			},
		],
	},
	{
		client: "EasyOps",
		sector: "Workforce technology",
		title: "Workforce operations, connected across sites",
		body: "A South African workforce platform bringing attendance, scheduling, payroll-ready reporting and multi-site oversight together.",
		tags: ["Web platform", "Workforce management", "Integrations"],
		url: "https://www.easyops.co.za/",
		sections: [
			{
				title: "Context",
				body: "Teams working across offices, sites and field locations need consistent attendance records, coordinated shifts and a clearer view of day-to-day workforce operations.",
			},
			{
				title: "Platform",
				body: "EasyOps presents QR, biometric and WhatsApp check-in options alongside shift scheduling, attendance dashboards and payroll exports. Its plans cater to single-site businesses through to larger, multi-site organisations.",
			},
			{
				title: "Experience",
				body: "Managers can monitor attendance, review overtime and absenteeism, and prepare payroll-ready reports from one platform. South African labour requirements are addressed through BCEA-focused records and audit features.",
			},
		],
	},
] as const

export const work = [
	{
		client: "National Municipal Services",
		sector: "Government",
		title: "Municipal Sanitation & Water Portal",
		body: "GIS-enabled platform for municipal water and sanitation infrastructure: GIS, asset lifecycle, maintenance, demand management and compliance reporting for South African municipalities.",
		tags: ["Backend", "Frontend", "APIs", "Integration"],
	},
	{
		client: "Dawn-Analytics",
		sector: "Private",
		title: "Financial Education Platform",
		body: "Platform is a comprehensive, modern web application designed to help South African households manage, understand, and strategically pay off their debt.",
		tags: ["FinTech", "Education", "Frontend", "Backend"],
	},
	{
		client: "Open Shop",
		sector: "Private",
		title: "E-commerce platform for luxury fashion",
		body: "OpenShop is a modern e-commerce web application built for selling luxury fashion and accessories at discounted prices.",
		tags: ["Frontend", "Backend", "Database", "APIs"],
	},
	{
		client: "EasyOps",
		sector: "Private Corporate",
		title: "Workforce Management System",
		body: "EasyOps is a cloud-native workforce management platform purpose-built for South African (and African) organisations operating across multiple sites and shift patterns.",
		tags: ["Frontend", "Backend", "Database", "Auth"],
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
