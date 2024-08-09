import { useMachine } from '@xstate/react';
import { GameStatus } from '../GameStatus';
import { GameBoard } from '../GameBoard';
import { GameForm } from '../GameForm';
import { ticTacToeMachine } from '../../machines/ticTacToeMachine';

const TicTacToe = () => {
  const [state, send] = useMachine(ticTacToeMachine);

  const { player, winner, boardSize, board } = state.context;

  const makeMove = (squareId: number) => send({ type: 'MAKE_MOVE', squareId });

  return (
    <div data-testid="tic-tac-toe">
      <GameStatus>
        {state.matches('idle') && "Select grid size and let's begin!"}
        {state.matches('playing') && `Next player: ${player ? 'x' : 'o'}`}
        {state.matches('won') && `Winner: ${winner}`}
        {state.matches('draw') && `Draw`}
      </GameStatus>
      {!state.matches('idle') && (
        <GameBoard boardSize={boardSize} board={board} makeMove={makeMove} />
      )}
      <GameForm />
    </div>
  );
};

export default TicTacToe;
