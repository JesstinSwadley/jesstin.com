import { BarChart3, BookOpenCheck, Cpu, TrendingUp, Users, Zap } from 'lucide-react';
import React from 'react'

export interface CaseStudyStory {
	situation: string;
	action: string;
	result: string;
	tools?: string[];
}

export interface ImpactItem {
	metric: string;
	label: string;
	description: string;
	icon: React.ReactNode;
	story: CaseStudyStory;
}

export const impactResults: ImpactItem[] = [
	{
		metric: "76%",
		label: "TTV Reduction",
		description: "Collapsed Post-Sales onboarding latency from 60 days down to a structured 14-day delivery cycle.",
		icon: <Zap
				size={24} />,
		story: {
			situation: "Fulfillment and client onboarding were bottlenecked by an unmeasured, fragmented legacy Zoho stack, causing delivery cycles to crawl between 45 and 60 days, delaying contract revenue recognition.",
			action: "Diagnosed software architecture friction, planned a zero-downtime cross-platform migration, and engineered automated intake pipelines using Google Workspace APIs, Bitwarden access layers, and customized ClickUp workflows.",
			result: "Compressed onboarding cycles to a predictable 14-to-21 days—slashing delivery latency by up to 76%—which accelerated capital velocity and scaled asynchronous portfolio capacity to 30+ active enterprise accounts."
		}
	},
	{
		metric: "182 Pages",
		label: "Knowledge Operations",
		description: "Engineered a comprehensive, version-controlled playbook repository to standardize international team execution.",
		icon: <BookOpenCheck
				size={24} />,
		story: {
			situation: "As the distributed global workforce scaled, a lack of strict governance models led to execution anomalies and unauthorized adjustments to core operational templates by front-line contractors.",
			action: "Authored a centralized 182-page corporate operational playbook registry and built an isolated, permission-locked 'Process Library' space inside ClickUp to enforce enterprise-grade data governance.",
			result: "Permanently eliminated template-corruption downtime while deploying a continuous loop feedback form that systematically ingested field anomalies and shipped patches within 7 days."
		}
	},
	{
		metric: "12%",
		label: "Client Retention",
		description: "Engineered behavioral data visualization models to proactively identify and mitigate client churn vectors.",
		icon: <Users 
				size={24} />,
		story: {
			situation: "Subtle shifts in customer product utilization patterns and interaction trends were going completely unmonitored, preventing operations from proactively identifying churn indicators.",
			action: "Structured clean relational databases and deployed advanced visualization dashboards to monitor core usage data, response metrics, and portfolio health trends.",
			result: "Delivered proactive, early-warning telemetry to account managers, driving a 12% increase in customer portfolio retention and accelerating feature adoption by 20%."
		}
	},
	{
		metric: "20%",
		label: "Feature Adoption",
		description: "Engineered a data aggregation platform for strategic decision-making, leading to a 20% boost in product usage.",
		icon: <TrendingUp 
				size={24} />,
		story: {
			situation: "Critical customer usage metrics were locked inside fragmented software silos, making it impossible for product leadership to extract actionable insights or evaluate onboarding friction.",
			action: "Designed a secure data aggregation platform utilizing structured relational database schemas to continuously parse platform interaction data and isolate systemic adoption bottlenecks.",
			result: "Delivered objective usage intelligence that successfully guided strategic product layout updates, yielding a documented 20% boost in high-value feature adoption."
		}
	},
	{
		metric: "10%",
		label: "Workflow Automation",
		description: "Programmed custom automated data processing scripts and webhooks to eliminate cross-platform administrative overhead.",
		icon: <Cpu 
			size={24} />,
		story: {
			situation: "Internal customer support, operations, and fulfillment teams spent valuable weekly hours manually duplicating record fields between fractured systems, introducing high-frequency data-entry errors.",
			action: "Developed lightweight internal automation tools, custom data processing scripts, and secure webhook integration nodes leveraging Google Workspace and CRM APIs to execute background record mapping.",
			result: "Eliminated system data-sync friction entirely, permanently slashing manual administrative workloads for internal support tiers by 10%."
		}
	},
	{
		metric: "Scalable",
		label: "Systems Architecture",
		description: "Partnered with Sales Ops and Finance to translate operational needs into scalable systems.",
		icon: <BarChart3 
				size={24} />,
		story: {
			situation: "The legacy Zoho business infrastructure was heavily bloated, showing severe performance degradation across communication, CRM, and project tracking that choked cross-functional collaboration.",
			action: "Designed and executed a comprehensive technical migration strategy alongside a full corporate rebrand. Overhauled the tech stack by implementing a unified environment covering ClickUp, Google Workspace, Bitwarden, and Hubstaff with zero platform downtime.",
			result: "Unified cross-functional data flows across Sales, Finance, and Customer Support. Provided an asynchronous, video-guided infrastructure academy that enabled immediate global team adoption with zero service disruption."
		}
	},
]