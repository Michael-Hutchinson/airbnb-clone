'use client';

import { SafeListing, SafeUser } from '@/app/types';
import Container from '../container/Container';
import Heading from '../heading/Heading';

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
    </Container>
  );
};

export default Favourites;
