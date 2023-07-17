'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import Modal from '../Modal';

const SearchModal = () => {
  const searchModal = useSearchModal();
  return (
    <Modal
      title="Filters"
      actionLabel="Search"
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onClose}
    />
  );
};

export default SearchModal;
