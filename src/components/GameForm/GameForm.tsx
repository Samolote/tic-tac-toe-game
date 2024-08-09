import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Input, Label } from './GameForm.style';

type Props = {
  isStartable: boolean;
  startGame: (boardSize: number) => void;
  restartGame: (boardSize: number) => void;
};

const GameForm = ({ isStartable, startGame, restartGame }: Props) => {
  const [boardSize, setBoardSize] = useState(3);

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const numericValue = Number(value);
    setBoardSize(numericValue);
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (isStartable) {
      startGame(boardSize);
    } else {
      restartGame(boardSize);
    }
  };

  return (
    <Form>
      <Label>
        Input grid size:
        <Input type="number" min={3} value={boardSize} onChange={handleChange} />
      </Label>
      <Button onClick={handleClick}>{isStartable ? 'Start' : 'Restart'}</Button>
    </Form>
  );
};

export default GameForm;
