export interface DeveloperProject {
	title: string;
	description: string;
	tags: string[];
	link: string;
	specsTitle: string;
	specs: string[];
}

export const developerProjects: DeveloperProject[] = [
	{
		title: "Job Tracker",
		description: "A production-ready stateless REST API designed to centralize and normalize career application tracking with a focus on high speed, secure data access, and reporting integrity.",
		tags: [
			"Go",
			"React 19",
			"Docker",
			"Tailwind",
			"AWS"
		],
		link: "https://github.com/JesstinSwadley/job-tracker",
		specsTitle: "System Architecture & Engineering Specs",
		specs: [
			"Backend Architecture: Production-ready stateless REST API built entirely in Go (Golang), utilizing optimized data structures and native routing for low computing latency and strict memory management.",
			"Security & Client Validation: Engineered a modern SPA interface using React 19 and Vite, implementing secure JWT-based stateless authentication alongside Zod schemas for robust client-side validation.",
			"DevOps & Infrastructure Footprint: Fully containerized environment using multi-stage Docker builds to minimize runtime footprints, configured behind an Nginx reverse proxy, and deployed directly to AWS EC2 cloud infrastructure."	
		]
	}
]