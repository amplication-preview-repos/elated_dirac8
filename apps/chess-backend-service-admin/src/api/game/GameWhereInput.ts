import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TournamentGameListRelationFilter } from "../tournamentGame/TournamentGameListRelationFilter";

export type GameWhereInput = {
  gamePlayedAt?: DateTimeNullableFilter;
  gamePlayer1?: StringNullableFilter;
  gamePlayer2?: StringNullableFilter;
  gameResult?: "Option1";
  id?: StringFilter;
  playedAt?: DateTimeNullableFilter;
  player1?: StringNullableFilter;
  player2?: StringNullableFilter;
  result?: "Option1";
  tournamentGames?: TournamentGameListRelationFilter;
};
