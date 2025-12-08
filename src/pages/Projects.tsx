import { useEffect } from "react";
import { StaggerContainer, StaggerItem } from "../components/StaggerComponent";

const projects = [
	{
		href: "",
		icon: "ph-network",
		title: "netpractice",
		description:
			"deciphering the labyrinth of networks, stringing fate through cables.",
	},
	{
		href: "",
		icon: "ph-hard-drives",
		title: "webserv",
		description:
			"binding incantations into a living server, where http awakens.",
	},
	{
		href: "",
		icon: "ph-cloud",
		title: "inception",
		description: 
			"building stacked environments through docker orchestration."
	},
	{
		href: "",
		icon: "ph-star-four",
		title: "ft_transcendence",
		description:
			"a full-stack challenge pushing architecture beyond basics."
	}
];

export default function Projects() {
	useEffect(() => {
		window.document.title = "KenFolio | Projects";
	}, [])

	return (
		<StaggerContainer className="w-full max-w-full px-4">
			{projects.map((project, index) => (
				<StaggerItem key={index} className="mb-3 sm:mb-6">
					<a href={project.href} target="_blank" rel="noopener noreferrer">
						<div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
						<i className={`ph ${project.icon} text-strong mr-2 sm:mr-3 text-base sm:text-xl flex-shrink-0`}></i>
						<p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase whitespace-nowrap">{project.title}</p>
						<span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline whitespace-nowrap">
							_ {project.description}
						</span>
						</div>
					</a>
				</StaggerItem>
			))}
		</StaggerContainer>
	);
}