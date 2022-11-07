interface IDeviceSize {
  width: string;
  height: string;
}

interface IDevice {
  name: string;
  styles: IDeviceSize;
}

export const viewPorts: {
  mobile: IDevice;
  tablet: IDevice;
  desktop: IDevice;
  wideDesktop: IDevice;
} = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768',
      height: '1024',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  wideDesktop: {
    name: 'Laptop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};
