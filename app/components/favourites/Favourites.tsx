'use client';

import { SafeListing, SafeUser } from '@/app/types';
import Container from '../container/Container';
import Heading from '../heading/Heading';
import ListingCard from '../listings/ListingCard/ListingCard';

interface FavouritesProps {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

const Favourites = ({ listings, currentUser }: FavouritesProps) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of places you have favourited!"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default Favourites;
