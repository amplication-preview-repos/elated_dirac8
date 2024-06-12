import { TournamentPlayerWhereInput } from "./TournamentPlayerWhereInput";
import { TournamentPlayerOrderByInput } from "./TournamentPlayerOrderByInput";

export type TournamentPlayerFindManyArgs = {
  where?: TournamentPlayerWhereInput;
  orderBy?: Array<TournamentPlayerOrderByInput>;
  skip?: number;
  take?: number;
};
