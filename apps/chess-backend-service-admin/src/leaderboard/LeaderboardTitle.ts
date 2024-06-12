import { Leaderboard as TLeaderboard } from "../api/leaderboard/Leaderboard";

export const LEADERBOARD_TITLE_FIELD = "leaderboardPlayer";

export const LeaderboardTitle = (record: TLeaderboard): string => {
  return record.leaderboardPlayer?.toString() || String(record.id);
};
