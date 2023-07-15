'use client';

import { SafeReservation, SafeUser } from '@/app/types';
import Container from '../container/Container';
import Heading from '../heading/Heading';

interface TripsProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const Trips = ({ reservations, currentUser }: TripsProps) => {
  return (
    <Container>
      <Heading title="Trips" subtitle="Where are you going on holiday!" />
    </Container>
  );
};

export default Trips;
