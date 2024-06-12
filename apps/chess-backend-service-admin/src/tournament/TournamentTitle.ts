import { Tournament as TTournament } from "../api/tournament/Tournament";

export const TOURNAMENT_TITLE_FIELD = "tournamentEndDate";

export const TournamentTitle = (record: TTournament): string => {
  return record.tournamentEndDate?.toString() || String(record.id);
};
