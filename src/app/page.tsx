import { UsersListRCC, UsersListRSC } from "@app/components/users-list";

const Home = () => (
  <div>
    <h1>Welcome to Next Advanced Apollo Starter!</h1>
    <h2>React Server Component:</h2>
    <UsersListRSC />
    <h2>React Client Component (Suspense):</h2>
    <UsersListRCC />
  </div>
);

export default Home;
