import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type TournamentGameWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  tournament?: TournamentWhereUniqueInput;
};
