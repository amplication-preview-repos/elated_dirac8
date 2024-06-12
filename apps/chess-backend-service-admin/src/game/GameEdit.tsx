import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TournamentGameTitle } from "../tournamentGame/TournamentGameTitle";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="gamePlayedAt" source="gamePlayedAt" />
        <TextInput label="gamePlayer1" source="gamePlayer1" />
        <TextInput label="gamePlayer2" source="gamePlayer2" />
        <SelectInput
          source="gameResult"
          label="gameResult"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="playedAt" source="playedAt" />
        <TextInput label="player1" source="player1" />
        <TextInput label="player2" source="player2" />
        <SelectInput
          source="result"
          label="result"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="tournamentGames"
          reference="TournamentGame"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TournamentGameTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
