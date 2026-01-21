import type { MockedFunction } from "vitest";
import { render, screen } from "@testing-library/react";
import { query } from "@app/lib/apollo";
import { UsersListContainer } from "./users-list-rsc";

vi.mock("@app/lib/apollo", () => ({
  query: vi.fn(),
}));

const mockQuery = query as MockedFunction<typeof query>;

describe("UsersList React Server Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render list of users", async () => {
    mockQuery.mockResolvedValue({
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
    });

    const Component = await UsersListContainer();
    render(Component);

    expect(screen.getByText(/Test User/i)).toBeInTheDocument();
  });
});
