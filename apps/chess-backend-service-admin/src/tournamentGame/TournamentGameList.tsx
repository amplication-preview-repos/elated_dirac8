import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { TOURNAMENT_TITLE_FIELD } from "../tournament/TournamentTitle";

export const TournamentGameList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TournamentGames"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="game" source="game.id" reference="Game">
          <TextField source={GAME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="tournament"
          source="tournament.id"
          reference="Tournament"
        >
          <TextField source={TOURNAMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
