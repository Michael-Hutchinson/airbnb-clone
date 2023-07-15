import EmptyState from '../components/emptystate/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorised" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return <EmptyState title="No trips" subtitle="You have no trips" />;
  }
  return <h1>trips page</h1>;
};

export default TripsPage;
