'use client';

import { Range } from 'react-date-range';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  disabledDates: Date[];
  disabled: boolean;
  onSubmit: () => void;
  onChange: (value: Range) => void;
}

const ListingReservation = ({
  price,
  dateRange,
  totalPrice,
  disabledDates,
  disabled,
  onSubmit,
  onChange,
}: ListingReservationProps) => {
  return (
    <div>
      <h1>ListingReservation</h1>
    </div>
  );
};

export default ListingReservation;
