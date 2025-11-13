import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#010101] flex flex-col justify-between px-8 md:px-80 py-8">
      {/* Header */}
      <header className="sect-head">
        <Link to="/">
          <div className="flex items-center gap-1 m-5 cursor-pointer">
            <p className="text-text-strong font-mono font-normal text-base uppercase">
              LH4J
            </p>
            <span className="text-text-weak font-mono font-normal text-base uppercase">
              _
            </span>
          </div>
        </Link>
      </header>

      {/* Main Content */}
      <main className="sect-main flex-1 flex items-center justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="sect-foot flex justify-end w-full">
        <div className="flex items-center gap-1 m-5">
          <a
            href="https://discord.com/users/lh4j/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-text-weak font-mono font-normal text-base uppercase hover:text-accent transition-colors duration-300">
              @LH4J
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}