import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const FloatingHeart = ({ style }: { style: React.CSSProperties }) => (
  <div className="floating-heart" style={style}>
    ❤️
  </div>
);

export default function Layout({ children }: LayoutProps) {
  const hearts = [
    { top: '5%', left: '3%', animationDelay: '0s', fontSize: '1.5rem', animationDuration: '6s' },
    { top: '10%', left: '90%', animationDelay: '1s', fontSize: '1rem', animationDuration: '8s' },
    { top: '20%', left: '7%', animationDelay: '2s', fontSize: '2rem', animationDuration: '7s' },
    { top: '30%', left: '95%', animationDelay: '0.5s', fontSize: '1.2rem', animationDuration: '9s' },
    { top: '50%', left: '2%', animationDelay: '3s', fontSize: '1.8rem', animationDuration: '6.5s' },
    { top: '60%', left: '92%', animationDelay: '1.5s', fontSize: '1rem', animationDuration: '7.5s' },
    { top: '75%', left: '5%', animationDelay: '2.5s', fontSize: '1.4rem', animationDuration: '8.5s' },
    { top: '85%', left: '88%', animationDelay: '0.8s', fontSize: '1.6rem', animationDuration: '6s' },
    { top: '40%', left: '97%', animationDelay: '4s', fontSize: '1.1rem', animationDuration: '9.5s' },
    { top: '70%', left: '1%', animationDelay: '3.5s', fontSize: '0.9rem', animationDuration: '7s' },
  ];

  return (
    <div className="min-h-screen valentine-bg relative overflow-x-hidden">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((h, i) => (
          <FloatingHeart
            key={i}
            style={{
              position: 'absolute',
              top: h.top,
              left: h.left,
              fontSize: h.fontSize,
              animationDelay: h.animationDelay,
              animationDuration: h.animationDuration,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 mt-8">
        <p className="text-pink-700 text-sm font-comic">
          Made with{' '}
          <span className="text-red-500 animate-pulse">❤️</span>
          {' '}for Aika Rienasari 💕 | Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'valentine-aika')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 transition-colors"
          >
            caffeine.ai
          </a>
          {' '}© {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
