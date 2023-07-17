import EmptyState from '../components/emptystate/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getFavouriteListings from '../actions/getFavouriteListings';

const FavouritesPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found!"
        subtitle="Looks like you have no favourite listings"
      />
    );
  }

  return <div>hello</div>;
};

export default FavouritesPage;
