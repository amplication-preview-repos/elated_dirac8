import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type TournamentPlayerCreateInput = {
  player?: PlayerWhereUniqueInput | null;
  tournament?: TournamentWhereUniqueInput | null;
};
