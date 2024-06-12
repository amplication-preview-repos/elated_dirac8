import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LeaderboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
