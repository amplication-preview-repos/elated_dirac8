import { TournamentPlayerUpdateManyWithoutPlayersInput } from "./TournamentPlayerUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  name?: string | null;
  rating?: number | null;
  tournamentPlayers?: TournamentPlayerUpdateManyWithoutPlayersInput;
};
