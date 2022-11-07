import '../src/commons/i18n/i18n';
import { viewPorts } from "../src/commons/viewports/viewports";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: viewPorts,
    defaultViewport: viewPorts.desktop,
  }
}