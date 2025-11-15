import { useState } from 'react';

interface Notification {
  id: number;
  message: string;
}

const contactLinks = [
  {
    icon: 'ph-envelope-simple',
    title: 'e-mail',
    description: 'send an email, please :c',
    action: 'copy',
    value: 'd4wan5564x@gmail.com',
    notification: 'Email Copied to Clipboard! 📧',
  },
  {
    href: 'https://www.linkedin.com/in/hamza-mouhib-861776252/',
    icon: 'ph-linkedin-logo',
    title: 'linked-in',
    description: 'linked-in? ...',
  },
  {
    href: 'https://www.instagram.com/4c48344a/',
    icon: 'ph-instagram-logo',
    title: 'instagram',
    description: 'send reels :p',
  },
  {
    icon: 'ph-discord-logo',
    title: 'discord',
    description: 'reach me out on discord!',
    action: 'copy',
    value: 'lh4j',
    notification: 'Discord ID Copied to Clipboard! 🎮',
  },
  {
    href: 'https://github.com/itsLhaj',
    icon: 'ph-github-logo',
    title: 'github',
    description: 'check my github ^^',
  },
];

export default function Contact() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [counter, setCounter] = useState(0);

  const showNotification = (message: string) => {
    const id = counter;
    setCounter(counter + 1);
    
    setNotifications(prev => [...prev, { id, message }]);
    
    setTimeout(() => {
      hideNotification(id);
    }, 2500);
  };

  const hideNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const handleCopy = (value: string, notification: string) => {
    navigator.clipboard.writeText(value);
    showNotification(notification);
  };

  return (
    <>
      <ul className="w-full max-w-4xl">
        {contactLinks.map((link, index) => (
          <li key={index} className="mb-6">
            {link.action === 'copy' ? (
              <button
                onClick={() => handleCopy(link.value!, link.notification!)}
                className="w-full text-left"
              >
                <div className="flex items-center gap-1 m-5 cursor-pointer group">
                  <i className={`ph ${link.icon} text-strong mr-3`}></i>
                  <p className="text-text-strong font-mono font-normal text-base uppercase">
                    {link.title}
                  </p>
                  <span className="text-text-weak font-mono font-normal text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                    _ {link.description}
                  </span>
                </div>
              </button>
            ) : (
              <a 
                href={link.href} 
                target={link.href?.startsWith('http') ? '_blank' : undefined}
                rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="flex items-center gap-1 m-5 cursor-pointer group">
                  <i className={`ph ${link.icon} text-strong mr-3`}></i>
                  <p className="text-text-strong font-mono font-normal text-base uppercase">
                    {link.title}
                  </p>
                  <span className="text-text-weak font-mono font-normal text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                    _ {link.description}
                  </span>
                </div>
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Notification Container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-4">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className="bg-[rgba(20,20,20,0.95)] border border-[rgba(255,255,255,0.1)] px-5 py-4 min-w-[300px] backdrop-blur-[10px] text-white text-xs font-mono animate-slide-in"
            style={{
              animation: 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
          >
            <div className="flex justify-between items-center">
              <span>{notif.message}</span>
              <button
                onClick={() => hideNotification(notif.id)}
                className="bg-transparent border-none text-[rgba(255,255,255,0.6)] cursor-pointer text-lg ml-2 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
}