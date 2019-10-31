import React from 'react';
import { NextPage } from 'next';

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  return {
    statusCode,
    namespacesRequired: ['common'],
  };
};

export default ErrorPage;
