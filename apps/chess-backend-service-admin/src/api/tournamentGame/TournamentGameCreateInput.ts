import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type TournamentGameCreateInput = {
  game?: GameWhereUniqueInput | null;
  tournament?: TournamentWhereUniqueInput | null;
};
