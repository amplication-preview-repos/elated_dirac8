import { TournamentGameUpdateManyWithoutGamesInput } from "./TournamentGameUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  gamePlayedAt?: Date | null;
  gamePlayer1?: string | null;
  gamePlayer2?: string | null;
  gameResult?: "Option1" | null;
  playedAt?: Date | null;
  player1?: string | null;
  player2?: string | null;
  result?: "Option1" | null;
  tournamentGames?: TournamentGameUpdateManyWithoutGamesInput;
};
