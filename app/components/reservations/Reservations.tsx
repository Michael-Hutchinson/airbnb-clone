'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SafeReservation, SafeUser } from '@/app/types';
import Heading from '../heading/Heading';
import Container from '../container/Container';
import ListingCard from '../listings/ListingCard/ListingCard';

const Reservations = () => {
  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
    </Container>
  );
};

export default Reservations;
