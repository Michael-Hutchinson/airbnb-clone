'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import Modal from '../Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { Range } from 'react-date-range';
import dynamic from 'next/dynamic';
import CountrySelect, {
  CountrySelectValue,
} from '../../input/CountrySelect/CountrySelect';
import qs from 'query-string';
import { formatISO } from 'date-fns';
import Heading from '../../heading/Heading';
import Calendar from '../../input/Calendar/Calendar';
import Counter from '../../input/Counter/Counter';

enum Steps {
  Location = 0,
  Date = 1,
  Info = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const searchModal = useSearchModal();

  const [step, setStep] = useState(Steps.Location);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [location, setLocation] = useState<CountrySelectValue>();

  const LocationMap = useMemo(
    () => dynamic(() => import('@/app/components/map/Map'), { ssr: false }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location],
  );

  const onBack = useCallback(() => {
    setStep((step) => step - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((step) => step + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== Steps.Info) {
      onNext();
      return;
    }

    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      {
        skipNull: true,
      },
    );

    setStep(Steps.Location);
    searchModal.onClose();

    router.push(url);
  }, [
    bathroomCount,
    dateRange.endDate,
    dateRange.startDate,
    guestCount,
    location?.value,
    onNext,
    params,
    roomCount,
    router,
    searchModal,
    step,
  ]);

  const actionLabel = useMemo(() => {
    if (step === Steps.Info) {
      return 'Search';
    }
    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === Steps.Location) {
      return undefined;
    }
    return 'Back';
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wana go?"
        subtitle="Find the perfect location"
      />
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as CountrySelectValue)}
      />
      <hr />
      <LocationMap center={location?.latlng} />
    </div>
  );

  if (step === Steps.Date) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free"
        />
        <Calendar
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    );
  }

  if (step === Steps.Info) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More Information" subtitle="Find more information" />
        <Counter
          title="Guests"
          subTitle="How many guests"
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
        />
        <Counter
          title="Rooms"
          subTitle="How many rooms do you need"
          value={roomCount}
          onChange={(value) => setRoomCount(value)}
        />
        <Counter
          title="Bathrooms"
          subTitle="How many bathrooms do you need"
          value={bathroomCount}
          onChange={(value) => setBathroomCount(value)}
        />
      </div>
    );
  }

  return (
    <Modal
      title="Filters"
      actionLabel={actionLabel}
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === Steps.Location ? undefined : onBack}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default SearchModal;
