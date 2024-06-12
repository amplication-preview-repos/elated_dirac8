import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Games"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="gamePlayedAt" source="gamePlayedAt" />
        <TextField label="gamePlayer1" source="gamePlayer1" />
        <TextField label="gamePlayer2" source="gamePlayer2" />
        <TextField label="gameResult" source="gameResult" />
        <TextField label="ID" source="id" />
        <TextField label="playedAt" source="playedAt" />
        <TextField label="player1" source="player1" />
        <TextField label="player2" source="player2" />
        <TextField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
