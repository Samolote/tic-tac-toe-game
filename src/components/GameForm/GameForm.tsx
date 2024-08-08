import { Button, Form, Input, Label } from './GameForm.style';

const GameForm = () => {
  return (
    <Form aria-label="form">
      <Label>
        Input grid size:
        <Input type="number" min={3} />
      </Label>
      <Button>Start / Restart</Button>
    </Form>
  );
};

export default GameForm;
