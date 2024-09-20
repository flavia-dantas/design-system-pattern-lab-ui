<a href="https://flavia-dantas.github.io/design-system-pattern-lab-ui/">
  <img src="https://github.com/user-attachments/assets/f0455edc-31a7-4c82-8497-8ec3ebd7e0aa" alt="pattern-lab-ui" width="400"/>
</a>

#
<div style="display: flex; align-items: center;">
  <span>@pattern-lab-ui/react</span>
   <a href="https://www.npmjs.com/package/@pattern-lab-ui/react">
  <img src="https://img.shields.io/npm/v/@pattern-lab-ui/react" alt="npm version" 
  style="margin-left: 8px;" />
   </a>
</div>

<div style="display: flex; align-items: center;">
  <span>@pattern-lab-ui/token</span>
    <a href="https://www.npmjs.com/package/@pattern-lab-ui/tokens">
  <img src="https://img.shields.io/npm/v/@pattern-lab-ui/tokens" alt="npm version" style="margin-left: 8px;" />
     </a>
</div>

### Sobre
Um Design System em React com tipografia, tokens de cor e componentes. O stoybook do projeto pode ser [acessado aqui](https://flavia-dantas.github.io/design-system-pattern-lab-ui/).

### Componentes

- [ ] Button
- [ ] Heading
- [ ] Text
- [ ] TextInput
- [ ] Textarea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep
  
### Tokens
- [ ] Colors
- [ ] Font Sizes
- [ ] Font Weights
- [ ] Font Families
- [ ] Line Heights
- [ ] Radii
- [ ] Space

## Instalação
Instalar com [npm](https://www.npmjs.com/)

Para os componentes:
```
npm i @pattern-lab-ui/react
```

Para Tokens:

```
npm i @pattern-lab-ui/tokens
```

## Como Usar 

Criar um arquivo `global.ts` em `scr/styles/global.ts`

Fazer o import:

```
import { globalCss } from "@pattern-lab-ui/react";
```

Caso precise adicionar mais styles:
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

Uso dos componentes:
```
import { Heading } from "@pattern-lab-ui/react";

export default function Home() {
  return (
    <Heading as="h1">Hello World</Heading>
  );
}
```
Aplicando os styles no `App()` (arquivo `_app.tsx`)

Exemplo utilizando Next `v14.2.12` e React `v18`,
```
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```
