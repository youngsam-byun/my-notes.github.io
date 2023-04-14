import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
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
  // eslint-disable-next-line no-unused-vars
  const { setHoroscopeResultCallback, setLoader } = inputContainerProps;
  const [flipCardId, setFlipCardId] = useState<number>(-1);
  const [age, setAge] = useState<number>(-1);
  const [genderId, setGenderId] = useState<number>(-1);

  const setFlipCardIdCallback = useCallback((cardId: number) => {
    setFlipCardId(cardId);
    const element = document.getElementById('ageSelector');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const setGenderIdCallback = useCallback((genderId: number) => {
    setGenderId(genderId);
    const element = document.getElementById('actionPanel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const resetCallback = useCallback(() => {
    setFlipCardId(-1);
    setAge(-1);
    setGenderId(-1);
    const element = document.getElementById('cardSelector');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const submitCallback = useCallback(async () => {
    setLoader(true);
    const res = await submitHoroscopeQuery();
    setHoroscopeResultCallback(res);
    setLoader(false);
  }, []);

  return (
    <>
      <div id={'cardSelector'}>
        <HCardList
          flipCardId={flipCardId}
          setFlipCardId={setFlipCardIdCallback}
        />
      </div>
      <Divider />
      <div id={'ageSelector'}>
        <AgeSelector age={age} setAge={setAge} />
      </div>
      <Divider />
      <div id={'genderSelector'}>
        <GenderSelector genderId={genderId} setGenderId={setGenderIdCallback} />
      </div>
      <Divider />
      <SDiv id={'actionPanel'}>
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
