import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
import { BLOGPOST_TITLE_FIELD } from "./BlogPostTitle";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="publishedAt" source="publishedAt" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="blogPostId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="BlogPost"
              source="blogpost.id"
              reference="BlogPost"
            >
              <TextField source={BLOGPOST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="commentAuthor" source="commentAuthor" />
            <TextField label="commentContent" source="commentContent" />
            <TextField label="commentCreatedAt" source="commentCreatedAt" />
            <TextField label="commentCreatedDate" source="commentCreatedDate" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="relatedBlogPost" source="relatedBlogPost" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
