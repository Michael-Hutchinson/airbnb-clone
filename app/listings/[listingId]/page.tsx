import getListingById from '@/app/actions/getListingById';

interface ListingPageProps {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: ListingPageProps }) => {
  const listing = await getListingById(params);
  return (
    <div>
      <h1>{listing?.title}</h1>
    </div>
  );
};

export default ListingPage;
