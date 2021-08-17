import '!style-loader!css-loader!../src/stories/font.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  smallDevice: {
    name: 'Small Device 576px',
    styles: {
      width: '576px',
      height: '800px',
    },
  },
  mediumDevice: {
    name: 'Medium Device 768px',
    styles: {
      width: '768px',
      height: '800px',
    },
  },
  largeDevice: {
    name: 'Large Device 992px',
    styles: {
      width: '992px',
      height: '800px',
    },
  },
  extraLargeDevice: {
    name: 'Extra Large Device 1200px',
    styles: {
      width: '1200px',
      height: '800px',
    },
  },
}

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}