import { TournamentPlayer } from "../tournamentPlayer/TournamentPlayer";

export type Player = {
  createdAt: Date;
  id: string;
  name: string | null;
  rating: number | null;
  tournamentPlayers?: Array<TournamentPlayer>;
  updatedAt: Date;
};
