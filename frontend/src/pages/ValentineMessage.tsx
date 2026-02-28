import { useNavigate } from '@tanstack/react-router';

export default function ValentineMessage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Back button */}
      <div className="w-full max-w-2xl mb-4">
        <button
          onClick={() => navigate({ to: '/' })}
          className="font-comic text-pink-600 hover:text-pink-800 transition-colors flex items-center gap-2 text-lg"
        >
          ← Kembali ke Beranda
        </button>
      </div>

      {/* Main card */}
      <div className="valentine-card max-w-2xl w-full rounded-3xl shadow-pink-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-400 px-8 py-8 text-center">
          <div className="text-5xl mb-3">💝</div>
          <h1 className="text-4xl md:text-5xl font-comic font-bold text-white drop-shadow-md leading-tight">
            Happy Valentine
          </h1>
          <h2 className="text-3xl md:text-4xl font-comic font-bold text-pink-100 mt-1">
            sayang 🌹
          </h2>
        </div>

        {/* Photo */}
        <div className="px-8 pt-8">
          <div className="relative rounded-2xl overflow-hidden shadow-pink border-4 border-pink-200">
            <img
              src="/assets/generated/couple-ayce.jpg"
              alt="Kita berdua lagi AYCE 🍖"
              className="w-full object-cover"
              style={{ maxHeight: '380px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/60 to-transparent px-4 py-3">
              <p className="font-comic text-white text-center text-sm font-bold">
                📸 Kenangan manis kita bareng 🍖✨
              </p>
            </div>
          </div>
        </div>

        {/* Love letter */}
        <div className="px-8 py-8">
          <div className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-6 relative">
            {/* Decorative quote marks */}
            <div className="text-6xl text-pink-200 font-serif leading-none absolute top-2 left-4 select-none">"</div>
            <div className="pt-6">
              <p className="font-comic text-pink-800 text-lg leading-relaxed">
                Hey bebe, do u know that I love you? that I love you so much, ofc it's obvious....
                because <span className="font-bold text-rose-600 text-xl">YOU are literally MY WORLD</span>,
                i'm so grateful to have you in my life, you gave everything to me, how can i not love you?
              </p>
              <p className="font-comic text-pink-800 text-lg leading-relaxed mt-4">
                I Hope that our love bond get much stronger and I hope I have so much money so that we can do{' '}
                <span className="font-bold text-rose-600">AYCE every single day</span> wkwkwkw,{' '}
                <span className="font-bold text-pink-700 text-xl">love you</span> 💕
              </p>
            </div>
            <div className="text-6xl text-pink-200 font-serif leading-none text-right select-none">"</div>
          </div>

          {/* Signature */}
          <div className="text-center mt-6">
            <p className="font-comic text-pink-500 text-lg">~ dengan sepenuh hati ~</p>
            <div className="text-3xl mt-2">💗💗💗</div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 px-8 py-4 text-center">
          <p className="font-comic text-pink-600 text-base">
            🌸 Forever & Always 🌸
          </p>
        </div>
      </div>

      {/* Puzzle CTA */}
      <div className="mt-8 text-center">
        <p className="font-comic text-pink-600 text-lg mb-3">Mau main puzzle juga? 🧩</p>
        <button
          onClick={() => navigate({ to: '/puzzle' })}
          className="valentine-btn text-lg px-6 py-3 rounded-full font-comic font-bold shadow-pink transition-all hover:scale-105 active:scale-95"
        >
          🧩 Main Puzzle Sekarang!
        </button>
      </div>
    </main>
  );
}
