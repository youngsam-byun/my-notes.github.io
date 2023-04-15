import React, { ForwardedRef } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { CSSProperties } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { viewPorts } from '../../commons/viewports/viewports';

interface StickyPanelProps {
  isResultShown: boolean;
}

const overlayStyle: CSSProperties = {
  float: 'left',
  margin: '0',
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  bottom: '1rem',
  zIndex: 1000,
};

const StickyPanel = React.forwardRef(
  (stickyPanelProps: StickyPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const isTablet = useMediaQuery({
      query: `(max-width: ${viewPorts.tablet.styles.width})`,
    });
    const isMobile = useMediaQuery({
      query: `(max-width: ${viewPorts.mobile.styles.width})`,
    });
    const iconSize = isMobile ? 'mini' : isTablet ? 'tiny' : 'small';

    return (
      // @ts-ignore
      <div ref={ref} style={fixedOverlayStyle}>
        <Menu
          icon="labeled"
          style={fixedOverlayStyle}
          horizontal
          size={iconSize}
        >
          <Menu.Item>
            <Icon name="whatsapp" />
            Whatsapp
          </Menu.Item>
          <Menu.Item>
            <Icon name="twitter" />
            Twitter
          </Menu.Item>
          <Menu.Item>
            <Icon name="facebook" />
            Share
          </Menu.Item>
          <Menu.Item>
            <Icon name="browser" />
            Url
          </Menu.Item>
        </Menu>
      </div>
    );
  },
);

StickyPanel.displayName = 'StickyPanel';
export { StickyPanel };
