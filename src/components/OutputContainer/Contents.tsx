import { HoroscopeResultType } from './output-container-constant';
import { Divider, Image } from 'semantic-ui-react';
import React from 'react';
import { getHCardInfoByName } from '../HCard/hcard-util';

const Contents = (horoscopeResult: HoroscopeResultType) => {
  const {
    horoscope,
    age,
    characteristic,
    colors,
    gender,
    numbers,
    people,
    sex,
    things,
    today,
  } = horoscopeResult;

  const hCardInfo = getHCardInfoByName(horoscope);
  const { description, header, src } = hCardInfo;

  return (
    <div>
      <p>
        <h3>{header}</h3>
        <Image src={src} avatar />
        <span>{description}</span>
        <Divider />
      </p>
      <p>
        <h3>Characteristic</h3>
        {characteristic}
        <Divider />
      </p>
      <p>
        <h3>Today horoscope</h3>
        {today}
        <Divider />
      </p>
      <p>
        <h3>Love</h3>
        {sex}
        <Divider />
      </p>
      <p>
        <h3>Gender</h3>
        {gender}
        <Divider />
      </p>
      <p>
        <h3>Age</h3>
        {age}
        <Divider />
      </p>
      <p>
        <h3>Lucky Numbers</h3>
        {numbers}
        <Divider />
      </p>
      <p>
        <h3>Lucky Colors</h3>
        {colors}
        <Divider />
      </p>
      <p>
        <h3>Lucky Things</h3>
        {things}
        <Divider />
      </p>
      <p>
        <h3>People</h3>
        {people}
        <Divider />
      </p>
    </div>
  );
};

Contents.displayName = 'Contents';
export { Contents };
