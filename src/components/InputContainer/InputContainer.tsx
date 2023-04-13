import React, { useState } from 'react';
import { Divider } from 'semantic-ui-react';
import { HCardList } from '../HCardList/HCardList';
import { AgeSelector } from '../AgeSelector/AgeSelector';
import { GenderSelector } from '../GenderSelector/GenderSelector';
export const InputContainer = () => {
  const [age, setAge] = useState<number>(-1);
  const [genderId, setGenderId] = useState<number>(-1);
  const [flipCardId, setFlipCardId] = useState<number>(-1);

  return (
    <>
      <HCardList flipCardId={flipCardId} setFlipCardId={setFlipCardId} />
      <Divider />
      <AgeSelector age={age} setAge={setAge} />
      <Divider />
      <GenderSelector genderId={genderId} setGenderId={setGenderId} />
    </>
  );
};
