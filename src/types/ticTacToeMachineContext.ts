import { Player } from './player';

export interface TicTacToeMachineContext {
  isPlaying: boolean;
  isDraw: boolean | null;
  player: Player;
  winner: Player | null;
  boardSize: number;
  board: Array<Player | null>;
}
