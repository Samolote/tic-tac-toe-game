import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import GameTile from './GameTile';

describe('GameTile', () => {
  it('renders clickable button', async () => {
    const makeMove = jest.fn();
    const user = userEvent.setup();
    render(<GameTile displayValue={'x'} makeMove={makeMove} />);

    await user.click(screen.getByRole('button', { name: 'x' }));
    expect(makeMove).toHaveBeenCalledTimes(1);
  });
});
