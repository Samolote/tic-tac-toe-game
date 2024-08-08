import { render, screen } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  const boardSize = 3;
  it('renders component and all buttons', () => {
    render(<GameBoard size={boardSize} />);
    expect(screen.getByTestId('game-board')).toBeVisible();
    expect(screen.getAllByRole('button')).toHaveLength(9);
  });
});
