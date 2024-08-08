const TicTacToe = () => {
  return (
    <div data-testid="tic-tac-toe">
      <p>game state goes here</p>
      <div>game board goes here</div>
      <form>
        <label>
          Input grid size:
          <input type="number" name="grid-size" />
        </label>
        <button>Start / Restart</button>
      </form>
    </div>
  );
};

export default TicTacToe;
