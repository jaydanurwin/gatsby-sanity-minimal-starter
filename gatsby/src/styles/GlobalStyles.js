import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {  
  --color-black: #202123;
  --color-dark-gray: #32373e;
  --color-gray: #697a90;
  --color-light-gray: #b4bcc7;
  --color-very-light-gray: #e7ebed;
  --color-white: #ffffff;
  --color-accent: #156dff;

  --theme-light-background: #FFFFFF;
  --theme-light-text-on-background: #000000;
  --theme-dark-background: #000000;
  --theme-dark-text-on-background: #FFFFFF;
  --theme-dark-color-white: #E7E5E5;
}

body {
  -webkit-font-smoothing: antialiased;
  background: var(--theme-light-background);
  color: var(--theme-light-text-on-background);
  margin: 0;
}

/* Global Dark Theme */
@media (prefers-color-scheme: dark) {
  body {
    background: var(--theme-dark-background);
    color: var(--theme-dark-text-on-background);
  }
  img[src*=".svg"] {
    filter: invert(1);
  }
}

/* Global Light Theme */
@media (prefers-color-scheme: light) {
  body {
    background: var(--theme-light-background);
    color: var(--theme-light-text-on-background);
  }
}

html,
body,
body > div,
body > div > div {
  height: 100%;
}

a {
  color: inherit;
}
`;

export default GlobalStyles;