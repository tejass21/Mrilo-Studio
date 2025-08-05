import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

const TriangleLogo = () => (
  <div className="w-14 h-14 relative flex items-center justify-center">
    <img 
      src="/6057439798186066999-removebg-preview.png"
      alt="Mrilo Studio Logo"
      className="w-full h-full object-contain"
      style={{
        filter: `
          brightness(1.2)
          drop-shadow(0 0 4px rgba(147,51,234,0.9))
          drop-shadow(0 0 8px rgba(147,51,234,0.7))
          drop-shadow(0 0 12px rgba(147,51,234,0.5))
          drop-shadow(0 0 16px rgba(147,51,234,0.3))
        `,
        animation: 'purple-pulse 4s ease-in-out infinite',
        transform: 'scale(0.9)',
      }}
    />
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at center, rgba(147,51,234,0.1) 0%, transparent 70%)',
        animation: 'purple-pulse 4s ease-in-out infinite alternate',
      }}
    />
  </div>
);

const GoogleSignInButton = () => (
  <button
    className="flex items-center gap-2 px-3 py-1.5 bg-purple-900/30 hover:bg-purple-800/40 text-purple-200 rounded-lg transition-all duration-300 border border-purple-700/30 text-sm"
    onClick={() => {
      // TODO: Implement Google Sign In
      console.log('Sign in with Google clicked');
    }}
    style={{
      animation: 'purple-pulse 3s ease-in-out infinite',
      boxShadow: '0 0 10px rgba(147,51,234,0.1)',
    }}
  >
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#fff"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#fff"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#fff"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#fff"
      />
    </svg>
    Sign in
  </button>
);

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames(
        'flex items-center px-6 py-4 border-b h-[var(--header-height)] relative overflow-hidden',
        'bg-gradient-to-r from-[#0a0a1f] via-[#1a1a35] to-[#0a0a1f]',
        'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.1),transparent_70%)]',
        {
          'border-transparent': !chat.started,
          'border-purple-800/30': chat.started,
        }
      )}
      style={{
        backgroundSize: '200% 200%',
        animation: 'purple-gradient-shift 20s ease infinite',
      }}
    >
      <div className="flex items-center gap-4 z-10 cursor-pointer">
        <a href="/" className="flex items-center gap-4 group">
          <TriangleLogo />
          <span 
            className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 group-hover:from-fuchsia-300 group-hover:via-purple-200 group-hover:to-fuchsia-300 transition-all duration-300"
            style={{ 
              animation: 'text-shimmer 4s ease-in-out infinite',
              textShadow: `
                0 0 20px rgba(147,51,234,0.5),
                0 0 40px rgba(147,51,234,0.3),
                0 0 60px rgba(147,51,234,0.2)
              `,
              letterSpacing: '0.08em',
              transform: 'translateY(0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.textShadow = `
                0 0 25px rgba(147,51,234,0.6),
                0 0 45px rgba(147,51,234,0.4),
                0 0 65px rgba(147,51,234,0.3)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.textShadow = `
                0 0 20px rgba(147,51,234,0.5),
                0 0 40px rgba(147,51,234,0.3),
                0 0 60px rgba(147,51,234,0.2)
              `;
            }}
          >
            <span className="mr-[0.2em]">MRILO</span>
            <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text">STUDIO</span>
          </span>
        </a>
      </div>
      {chat.started ? (
        <>
          <div className="flex-1 px-8">
            <div className="max-w-2xl mx-auto">
              <ClientOnly>
                {() => (
                  <div 
                    className="px-4 py-2 rounded-full bg-purple-900/10 border border-purple-700/20 text-purple-200 text-sm text-center backdrop-blur-sm"
                    style={{ animation: 'purple-glow 4s ease-in-out infinite' }}>
                    <ChatDescription />
                  </div>
                )}
              </ClientOnly>
            </div>
          </div>
          <ClientOnly>
            {() => (
              <div className="flex items-center gap-2">
                <HeaderActionButtons />
              </div>
            )}
          </ClientOnly>
        </>
      ) : (
        <div className="flex-1 flex justify-end">
          <GoogleSignInButton />
        </div>
      )}
    </header>
  );
}
