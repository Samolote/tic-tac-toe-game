import { render, screen } from '@testing-library/react';
import GameForm from './GameForm';

describe('GameForm', () => {
  it('renders form', () => {
    render(<GameForm />);
    expect(screen.getByRole('form')).toBeVisible();
  });
});
