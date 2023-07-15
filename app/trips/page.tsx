import EmptyState from '../components/emptystate/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import Trips from '../components/trips/Trips';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorised" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return <EmptyState title="No trips" subtitle="You have no trips" />;
  }

  return <Trips />;
};

export default TripsPage;
