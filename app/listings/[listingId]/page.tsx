import getListingById from '@/app/actions/getListingById';
import EmptyState from '@/app/components/emptystate/EmptyState';

interface ListingPageProps {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: ListingPageProps }) => {
  const listing = await getListingById(params);

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
    </div>
  );
};

export default ListingPage;
