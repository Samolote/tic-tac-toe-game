import { render, screen } from '@testing-library/react';
import GameStatus from './GameStatus';

describe('GameStatus', () => {
  it('renders paragraph', () => {
    render(<GameStatus />);
    expect(screen.getByRole('paragraph')).toBeVisible();
  });
});
