[![npm version](https://img.shields.io/npm/v/brand-logos?style=flat-square)](https://www.npmjs.com/package/brand-logos)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/ahmedmuneeb-dev/brand-logos/blob/main/LICENSE)
[![Docs](https://img.shields.io/badge/docs-available-blue?style=flat-square)](https://lab.ahmedmuneeb.com/brand-logos)

# Brand Logos

**Brand Logos** is a modern React logo library that includes colorful SVG brand logos rendered as React components.  
Logos are fully optimized using [SVGO](https://github.com/svg/svgo) and converted using [SVGR](https://github.com/gregberge/svgr) for seamless integration into your React app.

- NPM: [`brand-logos`](https://www.npmjs.com/package/brand-logos)
- Documentation: [lab.ahmedmuneeb.com/brand-logos](https://lab.ahmedmuneeb.com/brand-logos)
- Logo Gallery: [lab.ahmedmuneeb.com/brand-logos/logos](https://lab.ahmedmuneeb.com/brand-logos/logos)


## Features

- Tree-shakable — only imports the logos you use
- Fully typed with TypeScript
- Includes real **colored brand logos** (not monochrome icons)
- Supports both **ES Modules** and **CommonJS**
- Clean structure and flexible import system


## Installation

### Using npm

```bash
npm install brand-logos
```

### Using yarn

```bash
yarn add brand-logos
```


## Usage Example

```tsx
import { CloudflareIcon } from 'brand-logos';

function App() {
  return <CloudflareIcon width={48} height={48} />;
}
```

> **Note:** These logos are **pre-colored**, so changing the `fill` won’t work. For styling and sizing, use `width`, `height`, `className`, or other **SVG props** you need.


## Icon Sources & Licensing

- Logos are sourced from [gilbarbara/logos](https://github.com/gilbarbara/logos), licensed under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- Converted to React components using [SVGR](https://github.com/gregberge/svgr)
- Cleaned and optimized with [SVGO](https://github.com/svg/svgo)

## License

- Code: [MIT](https://github.com/ahmedmuneeb-dev/brand-logos/blob/main/LICENSE)
- Logos: [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
