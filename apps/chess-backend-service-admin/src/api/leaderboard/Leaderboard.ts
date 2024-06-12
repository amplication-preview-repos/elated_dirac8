export type Leaderboard = {
  createdAt: Date;
  id: string;
  leaderboardPlayer: string | null;
  leaderboardRank: number | null;
  leaderboardRating: number | null;
  updatedAt: Date;
};
