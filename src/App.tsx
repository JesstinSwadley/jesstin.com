import Hero from './components/sections/Hero';
import ExecutiveImpact from './components/sections/ExecutiveImpact';
import DeveloperPortfolio from './components/sections/DeveloperPortfolio';
import OperationsPortfolio from './components/sections/OperationsPortfolio';
import CareerEvolution from './components/sections/CareerEvolution';
import Footer from './components/sections/Footer';
import ThemeToggle from './components/ui/ThemeToggle';

function App() {
	
	return (
		<div
			className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">

				<ThemeToggle />

				<Hero />

				<div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent w-full max-w-5xl mx-auto" />

				<ExecutiveImpact />

				<DeveloperPortfolio />

				<OperationsPortfolio />

				<CareerEvolution />

				<Footer />
		</div>
	)
}

export default App;