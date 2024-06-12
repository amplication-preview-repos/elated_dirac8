import { TournamentGameUpdateManyWithoutTournamentsInput } from "./TournamentGameUpdateManyWithoutTournamentsInput";
import { TournamentPlayerUpdateManyWithoutTournamentsInput } from "./TournamentPlayerUpdateManyWithoutTournamentsInput";

export type TournamentUpdateInput = {
  tournamentEndDate?: Date | null;
  tournamentGames?: TournamentGameUpdateManyWithoutTournamentsInput;
  tournamentName?: string | null;
  tournamentPlayers?: TournamentPlayerUpdateManyWithoutTournamentsInput;
  tournamentStartDate?: Date | null;
};
