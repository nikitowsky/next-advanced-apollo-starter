import { User } from "@app/data/schema.graphql";
import { query } from "@app/lib/apollo";
import { UsersDocument, UsersQuery } from "./queries/users.graphql.interface";
import { UsersList } from "./users-list";

export const UsersListContainer = async () => {
  const { data } = await query<UsersQuery>({ query: UsersDocument });

  return <UsersList users={(data?.users?.data as User[]) || []} />;
};
