import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { HCardList } from '../HCardList/HCardList';
import { AgeSelector } from '../AgeSelector/AgeSelector';
import { GenderSelector } from '../GenderSelector/GenderSelector';
import styled from 'styled-components';
import { submitHoroscopeQuery } from '../../apis/api-horoscope';

interface InputContainerProps {
  setHoroscopeResultCallback: (result: string) => void;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
`;

export const InputContainer = (inputContainerProps: InputContainerProps) => {
  const cardSelectorRef = useRef<HTMLDivElement>(null);
  const ageSelectorRef = useRef<HTMLDivElement>(null);
  const genderSelectorRef = useRef<HTMLDivElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const { setHoroscopeResultCallback, setLoader } = inputContainerProps;
  const [flipCardId, setFlipCardId] = useState<number>(-1);
  const [age, setAge] = useState<number>(-1);
  const [genderId, setGenderId] = useState<number>(-1);

  const setFlipCardIdCallback = useCallback((cardId: number) => {
    setFlipCardId(cardId);
    if (ageSelectorRef.current)
      ageSelectorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, []);

  const setAgeCallback = useCallback((age: number) => {
    setAge(age);
    if (genderSelectorRef.current)
      genderSelectorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, []);

  const setGenderIdCallback = useCallback((genderId: number) => {
    setGenderId(genderId);
    if (buttonGroupRef.current)
      buttonGroupRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, []);

  const resetCallback = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setFlipCardId(-1);
    setAge(-1);
    setGenderId(-1);
  }, []);
  const submitCallback = useCallback(async () => {
    setLoader(true);
    const res = await submitHoroscopeQuery();
    setHoroscopeResultCallback(res);
    setLoader(false);
  }, []);

  return (
    <>
      <div ref={cardSelectorRef}>
        <HCardList
          flipCardId={flipCardId}
          setFlipCardIdCallback={setFlipCardIdCallback}
        />
      </div>
      <Divider />
      <div ref={ageSelectorRef}>
        <AgeSelector age={age} setAgeCallback={setAgeCallback} />
      </div>
      <Divider />
      <div ref={genderSelectorRef}>
        <GenderSelector genderId={genderId} setGenderId={setGenderIdCallback} />
      </div>
      <Divider />
      <SDiv ref={buttonGroupRef}>
        <Button.Group>
          <Button
            basic
            color={'red'}
            size={'massive'}
            onClick={() => resetCallback()}
          >
            Reset
          </Button>
          <Button.Or />
          <Button
            basic
            color={'blue'}
            size={'massive'}
            onClick={() => submitCallback()}
          >
            Find Todays Horoscope
          </Button>
        </Button.Group>
      </SDiv>
    </>
  );
};
