"use client";

import { Suspense } from "react";
import { User } from "@app/data/schema.graphql";
import { useSuspenseQuery } from "@apollo/client/react";
import { UsersDocument, UsersQuery } from "./queries/users.graphql.interface";
import { UsersList } from "./users-list";

const UsersListDataContainer = () => {
  const { data } = useSuspenseQuery<UsersQuery>(UsersDocument);

  return <UsersList users={(data?.users?.data as User[]) || []} />;
};

export const UsersListContainer = () => {
  return (
    <Suspense fallback={<div>Loading users...</div>}>
      <UsersListDataContainer />
    </Suspense>
  );
};
