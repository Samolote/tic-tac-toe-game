import { render, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

describe('TicTacToe', () => {
  it('renders', () => {
    render(<TicTacToe />);
    expect(screen.getByTestId('tic-tac-toe')).toBeVisible();
  });
});
