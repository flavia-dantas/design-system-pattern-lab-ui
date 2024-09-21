# @pattern-lab-ui/react

![npm version](https://img.shields.io/npm/v/@pattern-lab-ui/react)

### About
A comprehensive React Design System built to provide reusable components that ensure consistency and scalability across your projects.

See the [Changelog](https://github.com/flavia-dantas/design-system-pattern-lab-ui/blob/main/packages/react/CHANGELOG.md) for detailed updates and new features.

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

```bash
npm i @pattern-lab-ui/react
```

## How to Use 

Create a `global.ts` file in `src/styles/global.ts`

Import the global styles:

```typescript
import { globalCss } from "@pattern-lab-ui/react";
```

If you need to add more styles:
```typescript
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
```typescript
import { Heading } from "@pattern-lab-ui/react";

export default function Home() {
  return (
    <Heading as="h1">Hello World</Heading>
  );
}
```
Applying Styles in the `App()` (in the `_app.tsx` file)

Example using Next.js `v14.2.12` and React `v18`:
```typescript
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### Also see: @pattern-lab-ui/tokens
Tokens for your react project React.
[@pattern-lab-ui/tokens
](https://www.npmjs.com/package/@pattern-lab-ui/tokens
)