import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TournamentPlayerListRelationFilter } from "../tournamentPlayer/TournamentPlayerListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: IntNullableFilter;
  tournamentPlayers?: TournamentPlayerListRelationFilter;
};
