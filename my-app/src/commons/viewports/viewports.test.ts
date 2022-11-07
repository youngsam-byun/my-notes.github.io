import { viewPorts } from './viewports';

describe('viewports.test.ts', () => {
  describe('viewport test', () => {
    it('return device size', () => {
      const viewport = viewPorts.mobile;
      console.log(viewport);
    });
  });
});
