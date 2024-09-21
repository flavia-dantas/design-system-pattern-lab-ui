# @pattern-lab-ui/tokens

![npm version](https://img.shields.io/npm/v/@pattern-lab-ui/tokens)

### About
A set of design tokens that serve as the foundation for styling your React applications. Tokens include variables for colors, typography, spacing, and other design elements, allowing for unified and consistent design implementations.

See the [Changelog](https://github.com/flavia-dantas/design-system-pattern-lab-ui/blob/main/packages/tokens/CHANGELOG.md) for detailed updates and new features.

### Tokens

- Colors
- Font Sizes
- Font Weights
- Font Families
- Line Heights
- Radii
- Space

## Installation
Install with [npm](https://www.npmjs.com/)

```bash
npm i @pattern-lab-ui/tokens
```

## How to Use 
Exemple:

```typescript
import { colors } from '@pattern-lab-ui/tokens';

const Container = styled.div`
  background-color: ${colors.gray900};
  color: ${colors.gray100};
`;
```

### Also see: @pattern-lab-ui/react a React Design System.
Components for your project [@pattern-lab-ui/react](https://www.npmjs.com/package/@pattern-lab-ui/react).