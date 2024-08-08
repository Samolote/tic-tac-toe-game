import { GameStatus } from '../GameStatus';
import { GameBoard } from '../GameBoard';

const TicTacToe = () => {
  return (
    <div data-testid="tic-tac-toe">
      <GameStatus>game state goes here</GameStatus>
      <GameBoard size={3} />
      <form>
        <label>
          Input grid size:
          <input type="number" name="grid-size" />
        </label>
        <button>Start / Restart</button>
      </form>
    </div>
  );
};

export default TicTacToe;
