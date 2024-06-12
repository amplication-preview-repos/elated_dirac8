import { SortOrder } from "../../util/SortOrder";

export type TournamentGameOrderByInput = {
  createdAt?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
};
