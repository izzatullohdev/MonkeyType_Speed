// src/utils/calculateScore.ts
export const calculateScore = (
  wpm: number,
  accuracy: number,
  consistency: number
): number => {
  const avg = (wpm + accuracy + consistency) / 3;

  if (avg >= 90) return 5;
  if (avg >= 75) return 4;
  if (avg >= 60) return 3;
  if (avg >= 40) return 2;
  return 1;
};
