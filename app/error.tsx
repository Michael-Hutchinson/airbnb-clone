'use client';

import { useEffect } from 'react';
import EmptyState from './components/emptystate/EmptyState';

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Error" subtitle="An error has occurred." />;
};

export default Error;
