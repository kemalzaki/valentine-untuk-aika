import { useNavigate } from '@tanstack/react-router';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Banner */}
      <div className="w-full max-w-3xl mb-8">
        <img
          src="/assets/generated/valentine-banner.dim_1200x400.png"
          alt="Valentine Banner"
          className="w-full rounded-3xl shadow-pink object-cover"
          style={{ maxHeight: '220px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Main card */}
      <div className="valentine-card max-w-2xl w-full text-center px-8 py-10 rounded-3xl shadow-pink-lg">
        {/* Hearts decoration */}
        <div className="text-4xl mb-4 animate-bounce-slow">💝💕💝</div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-comic font-bold text-pink-700 mb-3 leading-tight drop-shadow-sm">
          Happy Valentine's Day
        </h1>

        {/* Name */}
        <div className="my-6">
          <span className="text-3xl md:text-4xl font-comic font-bold text-rose-600 bg-pink-100 px-6 py-2 rounded-full border-2 border-pink-300 shadow-inner inline-block">
            ✨ Aika Rienasari ✨
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xl font-comic text-pink-600 mb-10 leading-relaxed">
          Selamat hari Valentine, sayang! 🌹<br />
          Ada sesuatu spesial untukmu di sini... 💌
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate({ to: '/message' })}
            className="valentine-btn text-xl px-8 py-4 rounded-full font-comic font-bold shadow-pink transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            💌 Baca Pesan Cinta
          </button>
          <button
            onClick={() => navigate({ to: '/puzzle' })}
            className="valentine-btn-outline text-xl px-8 py-4 rounded-full font-comic font-bold shadow-pink transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            🧩 Main Puzzle
          </button>
        </div>

        {/* Decorative bottom */}
        <div className="mt-8 text-3xl">
          🌸 💗 🌸 💗 🌸
        </div>
      </div>

      {/* Sparkle decorations */}
      <div className="mt-8 text-center">
        <p className="font-comic text-pink-500 text-lg animate-pulse">
          ~ Klik salah satu untuk mulai ~
        </p>
      </div>
    </main>
  );
}
