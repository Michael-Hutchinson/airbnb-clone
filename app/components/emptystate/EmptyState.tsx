'use client';

import { useRouter } from 'next/navigation';
import Heading from '../heading/Heading';
import Button from '../button/Button';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing filters to find more results',
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center h-[60vh] gap-2'>
      <Heading title={title} subtitle={subtitle} center />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
