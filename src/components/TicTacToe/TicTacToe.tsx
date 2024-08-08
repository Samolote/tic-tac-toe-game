import { GameStatus } from '../GameStatus';
import { GameBoard } from '../GameBoard';
import { GameForm } from '../GameForm';

const TicTacToe = () => {
  return (
    <div data-testid="tic-tac-toe">
      <GameStatus>game state goes here</GameStatus>
      <GameBoard size={3} />
      <GameForm />
    </div>
  );
};

export default TicTacToe;
