import { Button } from './GameTile.style';
import type { Player } from '../../types/player';

type Props = {
  value: Player | null;
};

const GameTile = ({ value }: Props) => {
  return <Button>{value}</Button>;
};

export default GameTile;
