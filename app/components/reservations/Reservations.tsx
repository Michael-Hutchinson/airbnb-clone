'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SafeReservation, SafeUser } from '@/app/types';
import Heading from '../heading/Heading';
import Container from '../container/Container';
import ListingCard from '../listings/ListingCard/ListingCard';

interface ReservationsProps {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
}

const Reservations = () => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled');
          router.refresh();
        })
        .catch(() => {
          toast.error('Something went wrong');
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router],
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
    </Container>
  );
};

export default Reservations;
