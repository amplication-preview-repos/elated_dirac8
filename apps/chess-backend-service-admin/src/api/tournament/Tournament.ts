import { TournamentGame } from "../tournamentGame/TournamentGame";
import { TournamentPlayer } from "../tournamentPlayer/TournamentPlayer";

export type Tournament = {
  createdAt: Date;
  id: string;
  tournamentEndDate: Date | null;
  tournamentGames?: Array<TournamentGame>;
  tournamentName: string | null;
  tournamentPlayers?: Array<TournamentPlayer>;
  tournamentStartDate: Date | null;
  updatedAt: Date;
};
