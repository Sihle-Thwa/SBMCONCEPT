export const projectTypes = [
	{ id: "website", label: "Website", basePrice: 25000 },
	{ id: "webapp", label: "Web Application", basePrice: 50000 },
	{ id: "ecommerce", label: "E-commerce", basePrice: 75000 },
	{ id: "enterprise", label: "Enterprise System", basePrice: 150000 },
] as const

export const quoteFeatures = [
	{ id: "auth", label: "User authentication", price: 10000 },
	{ id: "payments", label: "Payment integration", price: 15000 },
	{ id: "api", label: "API development", price: 20000 },
	{ id: "admin", label: "Admin dashboard", price: 25000 },
	{ id: "cms", label: "Content management", price: 15000 },
	{ id: "analytics", label: "Analytics & reporting", price: 20000 },
	{ id: "cloud", label: "Cloud hosting & CI/CD", price: 15000 },
	{ id: "integration", label: "Third-party integration", price: 18000 },
] as const

export type Timeline = "flexible" | "standard" | "rush"

export function estimate(
	type: string,
	features: string[],
	pages: number,
	timeline: Timeline,
): number {
	const base = projectTypes.find((p) => p.id === type)?.basePrice ?? 0
	const extras = features.reduce(
		(sum, id) => sum + (quoteFeatures.find((f) => f.id === id)?.price ?? 0),
		0,
	)
	const pageFactor = 1 + (pages - 5) * 0.05
	const timeFactor =
		timeline === "rush" ? 1.3
		: timeline === "flexible" ? 0.9
		: 1
	return Math.round((base + extras) * pageFactor * timeFactor)
}

export const formatRand = (n: number) =>
	"R" + n.toLocaleString("en-ZA").replace(/\u00a0|\s/g, ",")
