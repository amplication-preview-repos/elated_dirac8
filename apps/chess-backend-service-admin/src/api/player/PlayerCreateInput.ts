import { TournamentPlayerCreateNestedManyWithoutPlayersInput } from "./TournamentPlayerCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  name?: string | null;
  rating?: number | null;
  tournamentPlayers?: TournamentPlayerCreateNestedManyWithoutPlayersInput;
};
