type Props = {
  size: number;
};

const GameBoard = ({ size }: Props) => {
  const board = Array(size * size).fill(null);

  return (
    <div
      data-testid="game-board"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, 100px)`,
        justifyContent: 'center',
      }}
    >
      {board.map((_, i) => (
        <button key={i} style={{ height: '100px' }}></button>
      ))}
    </div>
  );
};

export default GameBoard;
