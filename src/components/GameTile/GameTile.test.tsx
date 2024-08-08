import { render, screen } from '@testing-library/react';
import GameTile from './GameTile';

describe('GameTile', () => {
  it('renders button', () => {
    render(<GameTile value={'x'} />);
    expect(screen.getByRole('button', { name: 'x' })).toBeVisible();
  });
});
