# @pattern-lab-ui/react

![npm version](https://img.shields.io/npm/v/@pattern-lab-ui/react)

### About
A React Design System. 
See the [Changelog](https://github.com/flavia-dantas/design-system-pattern-lab-ui/blob/main/packages/react/CHANGELOG.md) for details.

### Components

- Button
- Heading
- Text
- TextInput
- Textarea
- Checkbox
- Avatar
- MultiStep

## Installation
Install with [npm](https://www.npmjs.com/)

```
npm i @pattern-lab-ui/react
```

## How to Use 

Create a `global.ts` file in `src/styles/global.ts`

Import the global styles:

```
import { globalCss } from "@pattern-lab-ui/react";
```

If you need to add more styles:
```
import { globalCss } from "@pattern-lab-ui/react";

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
```

Using the Components:
```
import { Heading } from "@pattern-lab-ui/react";

export default function Home() {
  return (
    <Heading as="h1">Hello World</Heading>
  );
}
```
Applying Styles in the `App()` (in the `_app.tsx` file)

Example using Next.js `v14.2.12` and React `v18`:
```
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```
