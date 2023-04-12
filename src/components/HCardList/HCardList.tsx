import React from 'react';
import { hMap, HCardInfo } from '../HCard/hcard-constants';
import { Grid } from 'semantic-ui-react';
import { HCard } from '../HCard/HCard';
import { useMediaQuery } from 'react-responsive';
import { viewPorts } from '../../commons/viewports/viewports';

const hCardInfoArray: HCardInfo[] = Array.from(hMap.values());
export const HCardList = () => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${viewPorts.tablet.styles.width})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${viewPorts.mobile.styles.width})`,
  });
  const columnSize = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Grid columns={columnSize}>
      {hCardInfoArray.map((hc) => (
        <Grid.Column key={hc.id}>
          <HCard horoscope={hc.name} />
        </Grid.Column>
      ))}
    </Grid>
  );
};
