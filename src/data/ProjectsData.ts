export interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  coverImage: string;
  shortDescription: string;
  technologies: string[];
  overview: string;
  features: string[];
  challenge?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: "netpractice",
    icon: "ph-network",
    title: "netpractice",
    description: "deciphering the labyrinth of networks, stringing fate through cables.",
    coverImage: "/assets/netpractice-cover.jpg",
    shortDescription: "Network configuration challenge",
    technologies: ["Networking", "TCP/IP", "Subnetting", "Routing"],
    overview: "A comprehensive network configuration challenge that tests your understanding of network fundamentals, IP addressing, and routing protocols.",
    features: [
      "Network topology understanding",
      "Subnet mask calculation",
      "Routing configuration",
      "Protocol analysis"
    ],
    challenge: "Mastering complex network layers and configurations",
    outcome: "Deep understanding of networking principles and practical configuration skills"
  },
  {
    id: "webserv",
    icon: "ph-hard-drives",
    title: "webserv",
    description: "binding incantations into a living server, where http awakens.",
    coverImage: "/assets/webserv-cover.jpg",
    shortDescription: "HTTP server implementation",
    technologies: ["C++", "HTTP", "Networking", "Server Development"],
    overview: "Building a functional HTTP server from scratch, implementing core web server functionality and protocol handling.",
    features: [
      "HTTP request parsing",
      "Response generation",
      "Connection handling",
      "Configuration system"
    ],
    challenge: "Implementing HTTP protocol specifications correctly",
    outcome: "Production-ready HTTP server with proper error handling"
  },
  {
    id: "inception",
    icon: "ph-cloud",
    title: "inception",
    description: "building stacked environments through docker orchestration.",
    coverImage: "/assets/inception-cover.jpg",
    shortDescription: "Docker infrastructure project",
    technologies: ["Docker", "Docker Compose", "Linux", "Infrastructure"],
    overview: "Multi-container environment setup with Docker, implementing microservices architecture and orchestration.",
    features: [
      "Container orchestration",
      "Service networking",
      "Volume management",
      "Environment configuration"
    ],
    challenge: "Orchestrating multiple services with Docker",
    outcome: "Complete containerized application stack"
  },
  {
    id: "ft_transcendence",
    icon: "ph-star-four",
    title: "ft_transcendence",
    description: "a full-stack challenge pushing architecture beyond basics.",
    coverImage: "/assets/ft_transcendence-cover.jpg",
    shortDescription: "Full-stack web application",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets", "TypeScript"],
    overview: "A comprehensive full-stack project incorporating frontend, backend, database, and real-time communication.",
    features: [
      "Real-time multiplayer functionality",
      "User authentication and authorization",
      "Database design and optimization",
      "REST API implementation"
    ],
    challenge: "Integrating complex systems into a cohesive application",
    outcome: "Production-grade full-stack web application"
  }
];