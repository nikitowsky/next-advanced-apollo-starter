import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage = () => (
  <div>
    Hello world! You're running server in <i>{process.env.APP_ENV}</i> mode! <br />
    You can set-up <b>process.env.APP_ENV</b> variable in <b>next.config.js</b>. <br />
    Here is base routing:{' '}
    <Link href="/users">
      <a>List of users...</a>
    </Link>
  </div>
);

export default Index;
