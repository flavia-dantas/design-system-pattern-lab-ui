import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: [
      {
        name: 'Dark',
        class: themes.dark,
        color: '#333333',
      },
      {
        name: 'Light',
        class: themes.light,
        color: '#ffffff',
      },
    ],
    darkMode: {
      current: 'dark', // Define o tema padrão como dark
      stylePreview: true, // Opcional: ativa/desativa o preview de estilo
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333333' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
