import { TournamentGameCreateNestedManyWithoutTournamentsInput } from "./TournamentGameCreateNestedManyWithoutTournamentsInput";
import { TournamentPlayerCreateNestedManyWithoutTournamentsInput } from "./TournamentPlayerCreateNestedManyWithoutTournamentsInput";

export type TournamentCreateInput = {
  tournamentEndDate?: Date | null;
  tournamentGames?: TournamentGameCreateNestedManyWithoutTournamentsInput;
  tournamentName?: string | null;
  tournamentPlayers?: TournamentPlayerCreateNestedManyWithoutTournamentsInput;
  tournamentStartDate?: Date | null;
};
