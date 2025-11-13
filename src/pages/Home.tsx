import { Link } from 'react-router-dom';

const navigationItems = [
  {
    href: '/about',
    icon: 'ph-user',
    title: 'about',
    description: 'me? my journey',
  },
  {
    href: '/projects',
    icon: 'ph-rows',
    title: 'projects',
    description: 'things i\'ve built',
  },
  {
    href: '/skills',
    icon: 'ph-sparkle',
    title: 'skills',
    description: 'tech stack & tools',
  },
  {
    href: '/contact',
    icon: 'ph-link',
    title: 'contact',
    description: 'let\'s connect',
  },
  {
    href: '/certifications',
    icon: 'ph-certificate',
    title: 'Certifications',
    description: 'achievements & badges',
  },
  {
    href: '/resume',
    icon: 'ph-read-cv-logo',
    title: 'resume',
    description: 'my experience summary',
  },
];

export default function Home() {
  return (
    <ul>
      {navigationItems.map((item) => (
        <li key={item.href} className="mb-6">
          <Link to={item.href}>
            <div className="flex items-center gap-1 m-5 cursor-pointer group">
              <i className={`ph ${item.icon} text-text-strong mr-3`}></i>
              <p className="text-text-strong font-mono font-normal text-base uppercase">
                {item.title}
              </p>
              <span className="text-text-weak font-mono font-normal text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                _ {item.description}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}