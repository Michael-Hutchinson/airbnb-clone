import EmptyState from '../components/emptystate/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import Reservations from '../components/reservations/Reservations';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorised" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return <EmptyState title="No reservations" subtitle="Please create one" />;
  }

  return (
    <div>
      <Reservations reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default ReservationsPage;
