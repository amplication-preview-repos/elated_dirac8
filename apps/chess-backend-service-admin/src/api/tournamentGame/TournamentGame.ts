import { Game } from "../game/Game";
import { Tournament } from "../tournament/Tournament";

export type TournamentGame = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  tournament?: Tournament | null;
  updatedAt: Date;
};
