import React, { useState } from 'react';
import { hMap, HCardInfo } from '../HCard/hcard-constants';
import { Grid } from 'semantic-ui-react';
import { HCard } from '../HCard/HCard';
import { useMediaQuery } from 'react-responsive';
import { viewPorts } from '../../commons/viewports/viewports';
import { chunkArray } from '../../utils/array-utils';
import { HCardFlip } from '../HCardFlip/HCardFlip';
import { HCardDeck } from '../HCardDeck/HCardDeck';

const hCardInfoArray: HCardInfo[] = Array.from(hMap.values());
export const HCardList = () => {
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

  const [flipCardId, setFlipCardId] = useState<number>(-1);

  return (
    <>
      <div>
        <Grid>
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
                    />
                  ) : (
                    <HCard
                      id={hc.id}
                      horoscope={hc.name}
                      flipCardId={flipCardId}
                      setFlipCardId={setFlipCardId}
                    />
                  )}
                </Grid.Column>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </div>
      <HCardDeck flipCardId={flipCardId} />
    </>
  );
};
