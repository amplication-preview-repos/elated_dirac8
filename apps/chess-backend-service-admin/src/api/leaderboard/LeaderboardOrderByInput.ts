import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  leaderboardPlayer?: SortOrder;
  leaderboardRank?: SortOrder;
  leaderboardRating?: SortOrder;
  updatedAt?: SortOrder;
};
