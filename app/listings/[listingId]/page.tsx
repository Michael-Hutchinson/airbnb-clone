import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import EmptyState from '@/app/components/emptystate/EmptyState';
import Listing from '@/app/components/listings/Listing';

interface ListingPageProps {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: ListingPageProps }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <Listing listing={listing} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
