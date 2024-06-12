import { SortOrder } from "../../util/SortOrder";

export type TournamentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tournamentEndDate?: SortOrder;
  tournamentName?: SortOrder;
  tournamentStartDate?: SortOrder;
  updatedAt?: SortOrder;
};
