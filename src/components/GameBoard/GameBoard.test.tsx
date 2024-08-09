import { render, screen } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  it('renders component and all buttons', () => {
    const boardSize = 3;
    const board = Array(boardSize * boardSize).fill(null);
    const makeMove = jest.fn();

    render(<GameBoard boardSize={boardSize} board={board} makeMove={makeMove} />);
    expect(screen.getByTestId('game-board')).toBeVisible();
    expect(screen.getAllByRole('button')).toHaveLength(9);
  });
});
