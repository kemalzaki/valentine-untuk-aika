# Specification

## Summary
**Goal:** Fix the 3x3 sliding tile puzzle in PuzzleMinigame.tsx so that `couple-ayce.jpg` renders correctly as individual tiles.

**Planned changes:**
- Update each puzzle tile in `PuzzleMinigame.tsx` to use CSS `background-image` with `background-position` and `background-size` calculated per tile index to correctly slice the corresponding portion of `couple-ayce.jpg`
- Ensure the image path references `/assets/generated/couple-ayce.jpg`
- Keep the empty (blank) tile free of any background image rendering
- Leave puzzle logic in `useSlidingPuzzle.ts` unchanged

**User-visible outcome:** The puzzle grid displays the correct cropped region of the couple photo on each tile, forming a seamless full image when solved, with no blank or broken tiles.
