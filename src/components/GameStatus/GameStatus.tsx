import { ReactNode } from 'react';
import { Paragraph } from './GameStatus.style';

type Props = {
  children?: ReactNode;
};

const GameStatus = ({ children }: Props) => {
  return <Paragraph>{children}</Paragraph>;
};

export default GameStatus;
