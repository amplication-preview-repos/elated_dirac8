import { TournamentGame } from "../tournamentGame/TournamentGame";

export type Game = {
  createdAt: Date;
  gamePlayedAt: Date | null;
  gamePlayer1: string | null;
  gamePlayer2: string | null;
  gameResult?: "Option1" | null;
  id: string;
  playedAt: Date | null;
  player1: string | null;
  player2: string | null;
  result?: "Option1" | null;
  tournamentGames?: Array<TournamentGame>;
  updatedAt: Date;
};
