import { Button } from './GameTile.style';
import type { Player } from '../../types/player';

type Props = {
  displayValue: Player | null;
  makeMove: () => void;
};

const GameTile = ({ displayValue, makeMove }: Props) => {
  return <Button onClick={makeMove}>{displayValue}</Button>;
};

export default GameTile;
