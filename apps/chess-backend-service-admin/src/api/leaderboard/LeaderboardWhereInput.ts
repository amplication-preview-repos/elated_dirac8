import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  leaderboardPlayer?: StringNullableFilter;
  leaderboardRank?: IntNullableFilter;
  leaderboardRating?: IntNullableFilter;
};
