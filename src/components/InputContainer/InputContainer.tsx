import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Divider } from 'semantic-ui-react';
import { HCardList } from '../HCardList/HCardList';
import { AgeSelector } from '../AgeSelector/AgeSelector';
import { GenderSelector } from '../GenderSelector/GenderSelector';
import { SubmitPanel } from '../SubmitPanel/SubmitPanel';
import { HoroscopeResultType } from '../OutputContainer/output-container-constant';

interface InputContainerProps {
  // setHoroscopeResult: Dispatch<SetStateAction<HoroscopeResultType | null>>;
  setHoroscopeResultCallback: (
    horoscopeResultType: HoroscopeResultType | null,
  ) => void;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

export const InputContainer = ({
  setHoroscopeResultCallback,
  setLoader,
}: InputContainerProps) => {
  const cardSelectorRef = useRef<HTMLDivElement>(null);
  const ageSelectorRef = useRef<HTMLDivElement>(null);
  const genderSelectorRef = useRef<HTMLDivElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  const [flipCardId, setFlipCardId] = useState<number>(-1);
  const [age, setAge] = useState<number>(-1);
  const [genderId, setGenderId] = useState<number>(-1);

  const setFlipCardIdCallback = (cardId: number) => {
    setFlipCardId(cardId);
    ageSelectorRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const setGenderIdCallback = (genderId: number) => {
    setGenderId(genderId);
    buttonGroupRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const resetCallback = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setFlipCardId(-1);
    setAge(-1);
    setGenderId(-1);
  };

  return (
    <>
      <div ref={cardSelectorRef}>
        <HCardList
          flipCardId={flipCardId}
          setFlipCardIdCallback={setFlipCardIdCallback}
          setFlipCardId={setFlipCardId}
        />
      </div>
      <Divider />
      <div ref={ageSelectorRef}>
        <AgeSelector age={age} setAge={setAge} />
      </div>
      <Divider />
      <div ref={genderSelectorRef}>
        <GenderSelector
          genderId={genderId}
          setGenderIdCallback={setGenderIdCallback}
        />
      </div>
      <Divider />
      <SubmitPanel
        setHoroscopeResultCallback={setHoroscopeResultCallback}
        setLoader={setLoader}
        resetCallback={resetCallback}
        flipCardId={flipCardId}
        age={age}
        genderId={genderId}
      />
    </>
  );
};
