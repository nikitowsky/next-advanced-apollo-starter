import { NextPage } from 'next';
import Link from 'next/link';
import { useApolloClient } from '@apollo/client';

const IndexPage: NextPage = () => {
  const apolloClient = useApolloClient();

  return (
    <section>
      <h1>Hello, you're using Apollo Client {apolloClient.version}</h1>
      <p>Here are few examples of how to use it:</p>
      <nav>
        <ul>
          <li>
            <Link href="/users-csr">Client-Side Rendering</Link>
          </li>
          <li>
            <Link href="/users-ssr">Server-Side Rendering</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default IndexPage;
