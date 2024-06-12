import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAME_TITLE_FIELD } from "./GameTitle";
import { TOURNAMENT_TITLE_FIELD } from "../tournament/TournamentTitle";

export const GameShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="TournamentGame"
          target="gameId"
          label="TournamentGames"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
