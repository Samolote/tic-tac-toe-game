import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import GameForm from './GameForm';

describe('GameForm', () => {
  it('renders accessible form', async () => {
    const startGame = jest.fn();
    const restartGame = jest.fn();
    const user = userEvent.setup();

    const { rerender } = render(
      <GameForm isStartable={true} startGame={startGame} restartGame={restartGame} />,
    );

    const button = screen.getByRole('button');

    await user.click(button);
    expect(startGame).toHaveBeenCalledWith('3');
    expect(startGame).toHaveBeenCalledTimes(1);

    await user.type(screen.getByRole('spinbutton'), '3');
    expect(startGame).toHaveBeenCalledWith('33');
    expect(startGame).toHaveBeenCalledTimes(2);

    rerender(<GameForm isStartable={false} startGame={startGame} restartGame={restartGame} />);

    await user.click(button);
    expect(restartGame).toHaveBeenCalledTimes(1);
  });
});
