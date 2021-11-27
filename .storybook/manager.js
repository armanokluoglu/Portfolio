import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://www.armanokluoglu.com/icon.svg',
    brandTitle: 'Arman Okluoglu Components',
    brandUrl: 'https://www.armanokluoglu.com',
  },
});
