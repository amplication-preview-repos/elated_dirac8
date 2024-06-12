import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { TournamentGameTitle } from "../tournamentGame/TournamentGameTitle";
import { TournamentPlayerTitle } from "../tournamentPlayer/TournamentPlayerTitle";

export const TournamentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="tournamentEndDate" source="tournamentEndDate" />
        <ReferenceArrayInput
          source="tournamentGames"
          reference="TournamentGame"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TournamentGameTitle} />
        </ReferenceArrayInput>
        <TextInput label="tournamentName" source="tournamentName" />
        <ReferenceArrayInput
          source="tournamentPlayers"
          reference="TournamentPlayer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TournamentPlayerTitle} />
        </ReferenceArrayInput>
        <DateTimeInput
          label="tournamentStartDate"
          source="tournamentStartDate"
        />
      </SimpleForm>
    </Create>
  );
};
