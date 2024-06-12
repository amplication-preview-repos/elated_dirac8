import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type TournamentPlayerUpdateInput = {
  player?: PlayerWhereUniqueInput | null;
  tournament?: TournamentWhereUniqueInput | null;
};
