import { Player } from "../player/Player";
import { Tournament } from "../tournament/Tournament";

export type TournamentPlayer = {
  createdAt: Date;
  id: string;
  player?: Player | null;
  tournament?: Tournament | null;
  updatedAt: Date;
};
