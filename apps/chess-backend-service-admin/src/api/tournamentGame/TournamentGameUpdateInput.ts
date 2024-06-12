import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type TournamentGameUpdateInput = {
  game?: GameWhereUniqueInput | null;
  tournament?: TournamentWhereUniqueInput | null;
};
