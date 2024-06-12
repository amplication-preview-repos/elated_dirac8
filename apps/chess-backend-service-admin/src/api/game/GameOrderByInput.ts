import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  gamePlayedAt?: SortOrder;
  gamePlayer1?: SortOrder;
  gamePlayer2?: SortOrder;
  gameResult?: SortOrder;
  id?: SortOrder;
  playedAt?: SortOrder;
  player1?: SortOrder;
  player2?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
