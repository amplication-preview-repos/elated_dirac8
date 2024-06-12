import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LeaderboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="leaderboardPlayer" source="leaderboardPlayer" />
        <NumberInput
          step={1}
          label="leaderboardRank"
          source="leaderboardRank"
        />
        <NumberInput
          step={1}
          label="leaderboardRating"
          source="leaderboardRating"
        />
      </SimpleForm>
    </Create>
  );
};
