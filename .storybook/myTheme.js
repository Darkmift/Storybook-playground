// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import myCustomLogo from './static/logo.png';

const themeColors = { PRIMARY: 'antiquewhite', SECONDARY: 'cadetblue', TERTIARY: '#000', QUANTERNARY: '#fefefe' }

export default create({
  base: 'light',

  colorPrimary: themeColors.PRIMARY,
  colorSecondary: themeColors.SECONDARY,

  // UI
  appBg: themeColors.PRIMARY,
  appContentBg: themeColors.QUANTERNARY,
  appBorderColor: themeColors.QUANTERNARY,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: themeColors.TERTIARY,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: themeColors.TERTIARY,
  barSelectedColor: themeColors.TERTIARY,
  barBg: themeColors.PRIMARY,

  // Form colors
  inputBg: 'white',
  inputBorder: themeColors.QUANTERNARY,
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: myCustomLogo,
});