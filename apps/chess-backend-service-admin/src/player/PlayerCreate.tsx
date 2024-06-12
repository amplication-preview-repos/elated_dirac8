import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TournamentPlayerTitle } from "../tournamentPlayer/TournamentPlayerTitle";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceArrayInput
          source="tournamentPlayers"
          reference="TournamentPlayer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TournamentPlayerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
