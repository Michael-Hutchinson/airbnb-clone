'use client';

import { SafeListing, SafeUser } from '@/app/types';
import { Reservation } from '@prisma/client';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default ListingClient;
