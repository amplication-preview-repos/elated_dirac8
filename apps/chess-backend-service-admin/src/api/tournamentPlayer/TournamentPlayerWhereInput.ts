import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type TournamentPlayerWhereInput = {
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  tournament?: TournamentWhereUniqueInput;
};
