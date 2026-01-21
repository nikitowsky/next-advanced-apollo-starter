import { render, screen, waitFor, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing/react";
import { UsersListContainer } from "./users-list-rcc";
import { UsersDocument } from "./users.graphql.interface";

const createMocks = () => [
  {
    request: {
      query: UsersDocument,
    },
    result: {
      data: {
        users: {
          data: [
            {
              id: "1",
              name: "Test User",
            },
          ],
        },
      },
    },
  },
];

describe("UsersList (React Client Component)", () => {
  it("should render loading state and then list of users", async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={createMocks()}>
          <UsersListContainer />
        </MockedProvider>,
      );
    });

    expect(screen.getByText(/Loading users.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Test User/i)).toBeInTheDocument();
    });
  });
});
