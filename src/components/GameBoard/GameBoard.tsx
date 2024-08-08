import { GameTile } from '../GameTile';
import { BoardGrid } from './GameBoard.style';

type Props = {
  size: number;
};

const GameBoard = ({ size }: Props) => {
  const board = Array(size * size).fill(null);

  return (
    <BoardGrid $size={size} data-testid="game-board">
      {board.map((_, i) => (
        <GameTile value={null} key={i} />
      ))}
    </BoardGrid>
  );
};

export default GameBoard;
