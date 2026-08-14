import { Button } from "../Button";
import { Card } from "../Card";

type SaveTeamProps = {
  saveTeam: () => void;
};

export const SaveTeam = ({ saveTeam }: SaveTeamProps) => (
  <Card aria-label="Сохранение команды">
    <Button onClick={saveTeam}>Сохранить команду</Button>
  </Card>
);
