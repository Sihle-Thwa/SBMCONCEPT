import { Component, type ErrorInfo, type ReactNode } from "react"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import Index from "./pages/Index"
import Services from "./pages/Services"
import Pricing from "./pages/Pricing"
import Quote from "./pages/Quote"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import "./App.css"

const queryClient = new QueryClient()

interface AppErrorBoundaryState {
	hasError: boolean
}

class AppErrorBoundary extends Component<
	{ children: ReactNode },
	AppErrorBoundaryState
> {
	state: AppErrorBoundaryState = { hasError: false }

	static getDerivedStateFromError(): AppErrorBoundaryState {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Unhandled application render error:", error, errorInfo)
	}

	reset = () => this.setState({ hasError: false })

	render() {
		if (this.state.hasError) {
			return (
				<div className="app-error">
					<div className="app-error__content">
						<h1>This page didn&apos;t load</h1>
						<p>
							Something went wrong. You can try again or return to the home
							page.
						</p>
						<div className="app-error__actions">
							<button type="button" onClick={this.reset}>
								Try again
							</button>
							<Link to="/" onClick={this.reset}>
								Go home
							</Link>
						</div>
					</div>
				</div>
			)
		}

		return this.props.children
	}
}

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<BrowserRouter>
				<AppErrorBoundary>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/services" element={<Services />} />
						<Route path="/pricing" element={<Pricing />} />
						<Route path="/quote" element={<Quote />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Work />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="*"
							element={
								<Layout>
									<NotFound />
								</Layout>
							}
						/>
					</Routes>
				</AppErrorBoundary>
				<Toaster />
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
)

export default App
