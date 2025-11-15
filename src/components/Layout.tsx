import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Rain from './Rain';
import LightParticles from './LightParticles';

interface LayoutProps { children: React.ReactNode; }

export default function Layout({ children }: LayoutProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div className="min-h-screen relative z-10 flex flex-col justify-between px-8 md:px-80 py-8 transition-colors duration-300">
        {/* background layer: keeps bg color but allows canvases to render above it */}
        <div className="absolute inset-0 -z-20 bg-white dark:bg-[#010101]" aria-hidden />
        {/* light-mode particle canvas + dark-mode rain canvas (positioned above background) */}
        <LightParticles />
        <Rain />
        <header className="sect-head flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center gap-1 m-5 cursor-pointer">
              <p className="text-text-strong font-mono text-base uppercase">LH4J</p>
              <span className="text-text-weak font-mono text-base uppercase">_</span>
            </div>
          </Link>
          <button onClick={toggleTheme} className="group text-strong hover:text-accent transition-colors duration-300" aria-label="Toggle theme">
            <i className={`ph ${isDark ? 'ph-sun' : 'ph-moon'}`}></i>
          </button>
        </header>

        <main className="sect-main flex-1 flex items-center justify-center">{children}</main>

        <footer className="sect-foot flex justify-end w-full">
          <div className="flex items-center gap-1 m-5">
            <a href="https://discord.com/users/lh4j/" target="_blank" rel="noopener noreferrer">
              <span className="text-text-weak font-mono text-base uppercase hover:text-accent transition-colors duration-300">@LH4J</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}