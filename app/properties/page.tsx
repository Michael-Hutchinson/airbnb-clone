import EmptyState from '../components/emptystate/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';
import Properties from '../components/properties/Properties';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorised" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <EmptyState title="No properties" subtitle="You have no properties" />
    );
  }

  return <Properties listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;
