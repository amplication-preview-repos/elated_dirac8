import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TournamentPlayerTitle } from "../tournamentPlayer/TournamentPlayerTitle";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
