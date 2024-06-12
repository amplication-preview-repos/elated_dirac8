import { TournamentPlayer as TTournamentPlayer } from "../api/tournamentPlayer/TournamentPlayer";

export const TOURNAMENTPLAYER_TITLE_FIELD = "tournament";

export const TournamentPlayerTitle = (record: TTournamentPlayer): string => {
  return record.tournament?.toString() || String(record.id);
};
