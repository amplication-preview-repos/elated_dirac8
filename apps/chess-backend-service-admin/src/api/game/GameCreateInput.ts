import { TournamentGameCreateNestedManyWithoutGamesInput } from "./TournamentGameCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  gamePlayedAt?: Date | null;
  gamePlayer1?: string | null;
  gamePlayer2?: string | null;
  gameResult?: "Option1" | null;
  playedAt?: Date | null;
  player1?: string | null;
  player2?: string | null;
  result?: "Option1" | null;
  tournamentGames?: TournamentGameCreateNestedManyWithoutGamesInput;
};
