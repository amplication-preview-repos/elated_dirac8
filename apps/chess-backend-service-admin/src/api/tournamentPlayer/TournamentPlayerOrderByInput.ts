import { SortOrder } from "../../util/SortOrder";

export type TournamentPlayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
};
