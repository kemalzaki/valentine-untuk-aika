import { useNavigate } from '@tanstack/react-router';
import { useSlidingPuzzle } from '../hooks/useSlidingPuzzle';

const IMAGE_SRC = '/assets/generated/couple-ayce.jpg';
const GRID_SIZE = 3;
const TILE_SIZE = 120; // px per tile
const BOARD_SIZE = TILE_SIZE * GRID_SIZE; // 360px

export default function PuzzleMinigame() {
  const navigate = useNavigate();
  const { tiles, moves, isSolved, canMove, moveTile, reset } = useSlidingPuzzle();

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
        <div className="bg-gradient-to-r from-rose-400 to-pink-400 px-8 py-6 text-center">
          <div className="text-4xl mb-2">🧩</div>
          <h1 className="text-3xl md:text-4xl font-comic font-bold text-white drop-shadow-md">
            Puzzle Cinta
          </h1>
          <p className="font-comic text-pink-100 mt-1 text-lg">
            Susun puzzle foto kita! 💕
          </p>
        </div>

        <div className="px-6 py-8 flex flex-col items-center">
          {/* Stats */}
          <div className="flex gap-6 mb-6">
            <div className="text-center">
              <p className="font-comic text-pink-500 text-sm">Langkah</p>
              <p className="font-comic text-pink-700 text-2xl font-bold">{moves}</p>
            </div>
            <div className="text-center">
              <p className="font-comic text-pink-500 text-sm">Status</p>
              <p className="font-comic text-pink-700 text-lg font-bold">
                {isSolved ? '✅ Selesai!' : '🎯 Lanjutkan!'}
              </p>
            </div>
          </div>

          {/* Puzzle board */}
          <div
            className="relative rounded-2xl overflow-hidden border-4 border-pink-300 shadow-pink-lg"
            style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
          >
            {tiles.map((tileValue, index) => {
              const isEmpty = tileValue === GRID_SIZE * GRID_SIZE - 1;
              const col = index % GRID_SIZE;
              const row = Math.floor(index / GRID_SIZE);

              // Original column and row of this tile in the solved image
              const origCol = tileValue % GRID_SIZE;
              const origRow = Math.floor(tileValue / GRID_SIZE);

              const isMovable = canMove(index);

              // CSS background-position: shift by -(origCol * TILE_SIZE) and -(origRow * TILE_SIZE)
              // background-size: 300% 300% means the full image spans 3x3 tiles
              const bgPosX = -(origCol * TILE_SIZE);
              const bgPosY = -(origRow * TILE_SIZE);

              return (
                <div
                  key={tileValue}
                  onClick={() => !isEmpty && moveTile(index)}
                  style={{
                    position: 'absolute',
                    left: col * TILE_SIZE,
                    top: row * TILE_SIZE,
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                    cursor: isEmpty ? 'default' : isMovable ? 'pointer' : 'not-allowed',
                    transition: 'left 0.15s ease, top 0.15s ease',
                    boxSizing: 'border-box',
                    border: isEmpty
                      ? 'none'
                      : isMovable
                      ? '2px solid rgba(255,182,193,0.8)'
                      : '1px solid rgba(255,182,193,0.3)',
                    backgroundImage: isEmpty ? 'none' : `url('${IMAGE_SRC}')`,
                    backgroundSize: isEmpty ? 'auto' : `${BOARD_SIZE}px ${BOARD_SIZE}px`,
                    backgroundPosition: isEmpty ? 'center' : `${bgPosX}px ${bgPosY}px`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: isEmpty ? undefined : '#fce7f3',
                  }}
                  className={isEmpty ? 'bg-pink-100' : ''}
                >
                  {isEmpty && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl opacity-40">💗</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Hint: reference image */}
          <div className="mt-6 text-center">
            <p className="font-comic text-pink-500 text-sm mb-2">Referensi gambar:</p>
            <img
              src={IMAGE_SRC}
              alt="Referensi puzzle"
              className="rounded-xl border-2 border-pink-200 shadow-sm"
              style={{ width: 90, height: 90, objectFit: 'cover' }}
            />
          </div>

          {/* Shuffle button */}
          <button
            onClick={reset}
            className="mt-6 valentine-btn-outline text-lg px-8 py-3 rounded-full font-comic font-bold shadow-pink transition-all hover:scale-105 active:scale-95"
          >
            🔀 Acak Ulang
          </button>
        </div>
      </div>

      {/* Congratulations overlay */}
      {isSolved && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-900/50 backdrop-blur-sm">
          <div className="valentine-card max-w-md w-full mx-4 rounded-3xl shadow-pink-lg text-center px-8 py-10 animate-pop-in">
            <div className="text-6xl mb-4">🎉💝🎉</div>
            <h2 className="text-3xl font-comic font-bold text-pink-700 mb-4">
              Yeay, berhasil!
            </h2>
            <p className="font-comic text-pink-600 text-lg leading-relaxed mb-2">
              You did it! Our love is unbreakable like this puzzle! 💕
            </p>
            <p className="font-comic text-rose-500 text-base leading-relaxed mb-6">
              Sama kayak kita — walau diacak-acak, kita selalu bisa balik ke tempat yang bener bareng-bareng 🌹
            </p>
            <p className="font-comic text-pink-500 text-sm mb-6">
              Diselesaikan dalam <span className="font-bold text-pink-700">{moves} langkah</span> 🏆
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="valentine-btn-outline px-6 py-3 rounded-full font-comic font-bold text-base transition-all hover:scale-105"
              >
                🔀 Main Lagi
              </button>
              <button
                onClick={() => navigate({ to: '/message' })}
                className="valentine-btn px-6 py-3 rounded-full font-comic font-bold text-base transition-all hover:scale-105"
              >
                💌 Baca Pesan Cinta
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
