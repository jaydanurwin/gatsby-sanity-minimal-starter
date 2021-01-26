import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`
    :root{
    --font-family-sans: 'Open Sans',-apple-system, BlinkMacSystemFont, sans-serif;

    --unit: 16;
    --font-micro-size: calc(10 / var(--unit) * 1rem); /* 10px */
    --font-micro-line-height: calc(12 / 10); /* 12px */
    --font-small-size: calc(14 / var(--unit) * 1rem); /* 14px */
    --font-small-line-height: calc(21 / 14); /* 21px */
    --font-base-size: 1em; /* 16px */
    --font-base-line-height: calc(24 / var(--unit)); /* 24px */
    --font-large-size: calc(18 / var(--unit) * 1rem); /* 18px */
    --font-large-line-height: calc(27 / 18); /* 27px */

    --font-title3-size: calc(21 / var(--unit) * 1rem); /* 21px */
    --font-title3-line-height: calc(30 / 21); /* 30px */
    --font-title2-size: calc(24 / var(--unit) * 1rem); /* 24px */
    --font-title2-line-height: calc(33 / 24); /* 33px */
    --font-title1-size: calc(49 / var(--unit) * 1rem); /* 49px */
    --font-title1-line-height: calc(57 / 49); /* 57px */
    }

    html {
        font-family: var(--font-family-sans);
        font-size: var(--font-base-size);
        line-height: var(--font-base-line-height);
    }
`

export default Typography
