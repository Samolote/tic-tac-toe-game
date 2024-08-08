import { useMachine } from '@xstate/react';
import { GameStatus } from '../GameStatus';
import { GameBoard } from '../GameBoard';
import { GameForm } from '../GameForm';
import { ticTacToeMachine } from '../../machines/ticTacToeMachine';

const TicTacToe = () => {
  const [state] = useMachine(ticTacToeMachine);

  const { winner, player } = state.context;

  return (
    <div data-testid="tic-tac-toe">
      <GameStatus>
        {state.matches('idle') && "Select grid size and let's begin!"}
        {state.matches('playing') && `Next player: ${player ? 'x' : 'o'}`}
        {state.matches('won') && `Winner: ${winner}`}
        {state.matches('draw') && `Draw`}
      </GameStatus>
      <GameBoard size={3} />
      <GameForm />
    </div>
  );
};

export default TicTacToe;
