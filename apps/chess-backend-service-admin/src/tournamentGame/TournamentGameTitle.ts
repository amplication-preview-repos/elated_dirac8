import { TournamentGame as TTournamentGame } from "../api/tournamentGame/TournamentGame";

export const TOURNAMENTGAME_TITLE_FIELD = "tournament";

export const TournamentGameTitle = (record: TTournamentGame): string => {
  return record.tournament?.toString() || String(record.id);
};
