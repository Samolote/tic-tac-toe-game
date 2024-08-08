export const createWinningLines = (size: number) => {
  const lines: number[][] = [];

  for (let i = 0; i < size; i++) {
    const rows = Array(size)
      .fill(null)
      .map((_, j) => i * size + j);

    const columns = Array(size)
      .fill(null)
      .map((_, j) => i + j * size);

    lines.push(rows, columns);
  }

  const diagonal = Array(size)
    .fill(null)
    .map((_, i) => i * (size + 1));

  const antiDiagonal = Array(size)
    .fill(null)
    .map((_, i) => (i + 1) * (size - 1));

  lines.push(diagonal, antiDiagonal);

  return lines;
};
