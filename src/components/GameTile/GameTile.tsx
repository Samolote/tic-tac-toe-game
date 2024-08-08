type Player = 'x' | 'o';

type Props = {
  value: Player | null;
};

const GameTile = ({ value }: Props) => {
  return <button style={{ height: '100px' }}>{value}</button>;
};

export default GameTile;
