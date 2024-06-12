import { TournamentGameWhereInput } from "./TournamentGameWhereInput";
import { TournamentGameOrderByInput } from "./TournamentGameOrderByInput";

export type TournamentGameFindManyArgs = {
  where?: TournamentGameWhereInput;
  orderBy?: Array<TournamentGameOrderByInput>;
  skip?: number;
  take?: number;
};
