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
    <div className="bg-white rounded-lg border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
