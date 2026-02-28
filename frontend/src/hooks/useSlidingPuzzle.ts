import { useState, useCallback } from 'react';

const GRID_SIZE = 3;
const TOTAL_TILES = GRID_SIZE * GRID_SIZE;

// Solved state: [0, 1, 2, 3, 4, 5, 6, 7, 8] where 8 is the empty tile
const SOLVED_STATE = Array.from({ length: TOTAL_TILES }, (_, i) => i);

function isSolvable(tiles: number[]): boolean {
  // Count inversions (excluding empty tile = 8)
  let inversions = 0;
  const filtered = tiles.filter(t => t !== TOTAL_TILES - 1);
  for (let i = 0; i < filtered.length; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[i] > filtered[j]) inversions++;
    }
  }
  // For odd grid size (3x3), puzzle is solvable if inversions is even
  return inversions % 2 === 0;
}

function shuffleTiles(): number[] {
  let tiles: number[];
  do {
    tiles = [...SOLVED_STATE];
    // Fisher-Yates shuffle
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
  } while (!isSolvable(tiles) || isAlreadySolved(tiles));
  return tiles;
}

function isAlreadySolved(tiles: number[]): boolean {
  return tiles.every((t, i) => t === i);
}

export function useSlidingPuzzle() {
  const [tiles, setTiles] = useState<number[]>(() => shuffleTiles());
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);

  const emptyIndex = tiles.indexOf(TOTAL_TILES - 1);

  const canMove = useCallback((index: number): boolean => {
    const emptyRow = Math.floor(emptyIndex / GRID_SIZE);
    const emptyCol = emptyIndex % GRID_SIZE;
    const tileRow = Math.floor(index / GRID_SIZE);
    const tileCol = index % GRID_SIZE;

    return (
      (Math.abs(emptyRow - tileRow) === 1 && emptyCol === tileCol) ||
      (Math.abs(emptyCol - tileCol) === 1 && emptyRow === tileRow)
    );
  }, [emptyIndex]);

  const moveTile = useCallback((index: number) => {
    if (isSolved) return;
    if (!canMove(index)) return;

    setTiles(prev => {
      const newTiles = [...prev];
      const emptyIdx = newTiles.indexOf(TOTAL_TILES - 1);
      [newTiles[emptyIdx], newTiles[index]] = [newTiles[index], newTiles[emptyIdx]];

      // Check if solved
      if (isAlreadySolved(newTiles)) {
        setIsSolved(true);
      }

      return newTiles;
    });
    setMoves(prev => prev + 1);
  }, [canMove, isSolved]);

  const reset = useCallback(() => {
    setTiles(shuffleTiles());
    setMoves(0);
    setIsSolved(false);
  }, []);

  return {
    tiles,
    moves,
    isSolved,
    emptyIndex,
    canMove,
    moveTile,
    reset,
    gridSize: GRID_SIZE,
  };
}
