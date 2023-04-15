import React, { Dispatch, SetStateAction } from 'react';
import { HCardInfo, hCardMapById } from '../HCard/hcard-constants';
import { Grid } from 'semantic-ui-react';
import { HCard } from '../HCard/HCard';
import { useMediaQuery } from 'react-responsive';
import { viewPorts } from '../../commons/viewports/viewports';
import { chunkArray } from '../../utils/array-utils';
import { HCardFlip } from '../HCardFlip/HCardFlip';
import { getHCardInfoById } from '../HCard/hcard-util';
import { defaultTheme } from '../../styles/default-theme';

interface HCardListProps {
  flipCardId: number;
  setFlipCardId: Dispatch<SetStateAction<number>>;
  setFlipCardIdCallback: (cardId: number) => void;
}

const hCardInfoArray: HCardInfo[] = Array.from(hCardMapById.values());
const HCardList_ = (hCardListProps: HCardListProps) => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${viewPorts.tablet.styles.width})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${viewPorts.mobile.styles.width})`,
  });
  const columnSize = isMobile ? 3 : isTablet ? 4 : 6;
  const hCardsChunk: Array<Array<HCardInfo>> = chunkArray(
    hCardInfoArray,
    columnSize,
  );

  const { flipCardId, setFlipCardId, setFlipCardIdCallback } = hCardListProps;
  const hCardInfo = getHCardInfoById(flipCardId);

  return (
    <Grid>
      <h4
        style={{
          color:
            hCardInfo.name.length > 0
              ? defaultTheme.colors.blue
              : defaultTheme.colors.black,
        }}
      >
        Your Zodiac: {hCardInfo.header}
      </h4>
      {hCardsChunk.map((hcc, idx) => (
        <Grid.Row key={idx} columns={columnSize}>
          {hcc.map((hc) => (
            <Grid.Column key={hc.id}>
              {hc.id === flipCardId ? (
                <HCardFlip
                  id={hc.id}
                  horoscope={hc.name}
                  flipCardId={flipCardId}
                  setFlipCardId={setFlipCardId}
                  setFlipCardIdCallback={setFlipCardIdCallback}
                />
              ) : (
                <HCard
                  id={hc.id}
                  horoscope={hc.name}
                  flipCardId={flipCardId}
                  setFlipCardId={setFlipCardId}
                  setFlipCardIdCallback={setFlipCardIdCallback}
                />
              )}
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  );
};

const HCardList = React.memo(HCardList_);
export { HCardList };