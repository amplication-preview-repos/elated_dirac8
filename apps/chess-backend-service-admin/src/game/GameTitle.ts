import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "tournamentGames";

export const GameTitle = (record: TGame): string => {
  return record.tournamentGames?.toString() || String(record.id);
};
