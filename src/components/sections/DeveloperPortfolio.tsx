import { Code2, ExternalLink, GitFork } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import ProjectCard from "../cards/ProjectCard";

const DeveloperPortfolio = () => {
	const projects = [
		{
			title: "Job Trakcer",
			description: "A production-ready stateless REST API to centralize job tracking with a focus on speed, security, and data integrity.",
			tags: [
				"Go", 
				"React 19", 
				"Docker", 
				"AWS"
			],
			link: "https://github.com/JesstinSwadley/job-tracker"
		}
	]

	return (
		<SectionContainer>
			<SectionHeader
				title="Developer Portfolio"
				description="Engineering scalable tools to bridge the gap between technical execution and operational efficiency."
				align="left"/>


			<div
				className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project} />
					))}
			</div>
		</SectionContainer>
	)
}

export default DeveloperPortfolio;