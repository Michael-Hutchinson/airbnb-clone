'use client';

import { SafeListing, SafeUser } from '@/app/types';
import Container from '../container/Container';

interface FavouritesProps {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

const Favourites = ({ listings, currentUser }: FavouritesProps) => {
  return (
    <Container>
      <h1>Favourites</h1>
    </Container>
  );
};

export default Favourites;
