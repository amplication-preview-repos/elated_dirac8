import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TournamentGameListRelationFilter } from "../tournamentGame/TournamentGameListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TournamentPlayerListRelationFilter } from "../tournamentPlayer/TournamentPlayerListRelationFilter";

export type TournamentWhereInput = {
  id?: StringFilter;
  tournamentEndDate?: DateTimeNullableFilter;
  tournamentGames?: TournamentGameListRelationFilter;
  tournamentName?: StringNullableFilter;
  tournamentPlayers?: TournamentPlayerListRelationFilter;
  tournamentStartDate?: DateTimeNullableFilter;
};
