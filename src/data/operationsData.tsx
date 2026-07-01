import React from 'react';
import { ShieldAlert, Workflow } from 'lucide-react';

export interface OperationsProject {
	title: string;
	description: string;
	impact: string;
	tools: string[];
	icon: React.ReactNode;
	detailsTitle: string;
	details: string[];
}

export const operationsProject : OperationsProject[] = [
	{
		title: "Enterprise Services Overhaul & Automation",
		description: "Architected an end-to-end post-sales delivery framework to standardize cross-functional customer onboarding, track bandwidth, and automate system handoffs.",
		impact: "Compressed TTV by up to 76%, dropping delivery timelines from 60 days to a predictable 14-to-21 day window.",
		tools: ["Hubstaff", "ClickUp (PSA)", "GoHighLevel", "REST APIs"],
		icon: <Workflow 
				size={24} />,
		detailsTitle: "Pipeline Automation & Capacity Topology",
		details: [
			"Automated Handoff Infrastructure: Programmed custom workflow listeners to execute instantaneous client provisioning and click-to-deploy task distributions triggered immediately from CRM opportunity wins.",
			"Cross-Functional Data Architecture: Unified automated accounting, support, and sales metrics pipelines across Salesforce/CRM layers to deliver real-time operational datasets for monthly and quarterly business reviews (QBRs).",
			"Sandbox Threat Modeling: Engineered isolated sandbox staging environments to systematically stress-test prompt vulnerabilities and multi-agent computing latency before push-to-production deployment."
		]
	},
	{
		title: "Systems Governance & Security Architecture",
		description: "Single-handedly engineered a high-risk global infrastructure migration and data governance framework with zero downtime.",
		impact: "Permanently eliminated front-line template-corruption downtime across an international remote workforce.",
		tools: ["Google Workspace APIs", "Bitwarden IAM", "ClickUp", "Hubstaff", "SOPs"],
		icon: <ShieldAlert 
				size={24} />,
		detailsTitle: "Access Governance & Optimization Framework",
		details: [
			"The 182-Page Asset Playbook: Authored and institutionalized a centralized 182-page operational blueprint registry required to train autonomous AI customer support agents and lower escalation tiers.",
			"Isolated Process Staging: Designed a restricted 'Process Library' within project management tools, wrapping master templates in strict Identity Access Management (IAM) permissions with version-controlled rollbacks.",
			"Automated Optimization Loops: Programmed automated tracking tools using Google APIs and scripts to aggregate, analyze, and patch system anomalies within a 7-day SLA window."
		]
	}
]