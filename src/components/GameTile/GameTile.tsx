import { Button } from './GameTile.style';

type Player = 'x' | 'o';

type Props = {
  value: Player | null;
};

const GameTile = ({ value }: Props) => {
  return <Button>{value}</Button>;
};

export default GameTile;
