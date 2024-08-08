import { setup, assign, assertEvent } from 'xstate';
import { TicTacToeMachineContext } from '../types/ticTacToeMachineContext';
import { createWinningLines } from '../utils/createWinnningLines';

const context: TicTacToeMachineContext = {
  isPlaying: false,
  isDraw: false,
  player: 'x',
  winner: null,
  boardSize: 0,
  board: [],
};

export const ticTacToeMachine = setup({
  types: {
    context: {} as TicTacToeMachineContext,
    events: {} as
      | { type: 'START'; boardSize: number }
      | { type: 'RESTART'; boardSize: number }
      | { type: 'MAKE_MOVE'; squareId: number },
  },
  actions: {
    setBoardSize: assign({
      boardSize: ({ event }) => {
        assertEvent(event, ['START', 'RESTART']);
        return event.boardSize;
      },
    }),

    generateBoard: assign({
      board: ({ context }) => {
        return Array(context.boardSize * context.boardSize).fill(null);
      },
    }),

    resetContext: assign(context),
    startGame: assign({ isPlaying: true }),
    endGame: assign({ isPlaying: false }),

    switchPlayer: assign({
      player: ({ context }) => (context.player === 'x' ? 'o' : 'x'),
    }),

    setDrawTrue: assign({ isDraw: true }),
    setDrawFalse: assign({ isDraw: false }),

    setWinner: assign({
      winner: ({ context }) => (context.player === 'x' ? 'o' : 'x'),
    }),

    updateBoard: assign({
      board: ({ context, event }) => {
        assertEvent(event, 'MAKE_MOVE');
        const updatedBoard = [...context.board];
        updatedBoard[event.squareId] = context.player;
        return updatedBoard;
      },
    }),
  },
  guards: {
    checkDraw: ({ context }) => context.board.every((square) => square !== null),
    checkWin: ({ context }) => {
      const { board } = context;
      const winningLines = createWinningLines(context.boardSize);

      for (const line of winningLines) {
        const xPlayerWinPredicate = line.every((index) => board[index] === 'x');
        if (xPlayerWinPredicate) return true;

        const oPlayerWinPredicate = line.every((index) => board[index] === 'o');
        if (oPlayerWinPredicate) return true;
      }

      return false;
    },
    isValidMove: ({ context, event }) => {
      const eventType = 'MAKE_MOVE';

      if (event.type !== eventType) {
        return false;
      }

      assertEvent(event, eventType);
      return context.board[event.squareId] === null;
    },
  },
}).createMachine({
  id: 'tic-tac-toe',
  initial: 'idle',
  context,
  states: {
    idle: {
      on: {
        START: {
          target: 'playing',
          actions: ['startGame', 'setBoardSize', 'generateBoard'],
        },
      },
    },
    playing: {
      always: [
        { target: 'won', guard: 'checkWin' },
        { target: 'draw', guard: 'checkDraw' },
      ],
      on: {
        RESTART: {
          target: 'playing',
          actions: ['resetContext', 'startGame', 'setBoardSize', 'generateBoard'],
        },
        MAKE_MOVE: {
          target: 'playing',
          guard: 'isValidMove',
          actions: ['updateBoard', 'switchPlayer'],
        },
      },
    },
    won: {
      entry: ['endGame', 'setDrawFalse', 'setWinner'],
      on: {
        RESTART: {
          target: 'playing',
          actions: ['resetContext', 'startGame', 'setBoardSize', 'generateBoard'],
        },
      },
    },
    draw: {
      entry: ['endGame', 'setDrawTrue'],
      on: {
        RESTART: {
          target: 'playing',
          actions: ['resetContext', 'startGame', 'setBoardSize', 'generateBoard'],
        },
      },
    },
  },
});
