import { StaggerContainer, StaggerItem } from "../components/StaggerComponent";

const projects = [
  {
    href: 'https://github.com/iTsLhaj/libft',
    icon: 'ph-books',
    title: 'libft',
    description: 'forging the first grimoire of functions, a spellbook for all future quests.',
  },
  {
    href: 'https://github.com/iTsLhaj/ft_printf',
    icon: 'ph-text-aa',
    title: 'ft_printf',
    description: 'summoning formatted words from the void, beyond mere whispers of putnbr.',
  },
  {
    href: '',
    icon: 'ph-text-align-left',
    title: 'get_next_line',
    description: 'extracting lines from the abyss, one incantation at a time.',
  },
  {
    href: '',
    icon: 'ph-desktop-tower',
    title: 'born2beroot',
    description: 'initiation into the forbidden arts of system dominion.',
  },
  {
    href: '',
    icon: 'ph-chat',
    title: 'minitalk',
    description: 'harnessing signals, carrying thoughts through invisible ether.',
  },
  {
    href: 'https://github.com/iTsLhaj/pswapper',
    icon: 'ph-funnel',
    title: 'push_swap',
    description: 'commanding armies of numbers into order with swift maneuvers.',
  },
  {
    href: 'https://github.com/iTsLhaj/solong',
    icon: 'ph-fish-simple',
    title: 'so_long',
    description: 'a perilous journey through pixelated ruins, survival uncertain.',
  },
  {
    href: 'https://github.com/iTsLhaj/Minishell',
    icon: 'ph-terminal-window',
    title: 'minishell',
    description: 'forging a shell of my own, a vessel of commands and shadows.',
  },
  {
    href: '',
    icon: 'ph-waves',
    title: 'philosophers',
    description: 'meditations at the edge of starvation, where wisdom turns deadly.',
  },
  {
    href: '',
    icon: 'ph-network',
    title: 'netpractice',
    description: 'deciphering the labyrinth of networks, stringing fate through cables.',
  },
  {
    href: 'https://github.com/iTsLhaj/cub3d',
    icon: 'ph-joystick',
    title: 'cub3d',
    description: 'opening the first portal into a fractured three-dimensional realm.',
  },
  {
    href: 'https://github.com/Aziz018/webserv',
    icon: 'ph-hard-drives',
    title: 'webserv',
    description: 'binding incantations into a living server, where http awakens.',
  },
];

export default function Projects() {
  return (
    <StaggerContainer className="w-full max-w-4xl">
      {projects.map((project, index) => (
        <StaggerItem key={index} className="mb-6">
          {project.href ? (
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-1 m-5 cursor-pointer group">
                <i className={`ph ${project.icon} text-text-strong mr-3`}></i>
                <p className="text-text-strong font-mono font-normal text-base uppercase">
                  {project.title}
                </p>
                <span className="text-text-weak font-mono font-normal text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                  _ {project.description}
                </span>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-1 m-5 opacity-60">
              <i className={`ph ${project.icon} text-text-strong mr-3`}></i>
              <p className="text-text-strong font-mono font-normal text-base uppercase">
                {project.title}
              </p>
              <span className="text-text-weak font-mono font-normal text-base uppercase">
                _ {project.description}
              </span>
            </div>
          )}
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}