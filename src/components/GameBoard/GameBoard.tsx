import { Player } from '../../types/player';
import { GameTile } from '../GameTile';
import { BoardGrid } from './GameBoard.style';

type Props = {
  boardSize: number;
  board: Array<Player | null>;
  makeMove: (squareId: number) => void;
};

const GameBoard = ({ boardSize, board, makeMove }: Props) => {
  return (
    <BoardGrid $boardSize={boardSize} data-testid="game-board">
      {board.map((value, i) => (
        <GameTile displayValue={value} key={i} makeMove={() => makeMove(i)} />
      ))}
    </BoardGrid>
  );
};

export default GameBoard;
