# dense-ui

A React component library for data-heavy interfaces. Dense by default. Accessible by default. Built with TypeScript, Radix UI primitives, and CSS variables.

> Most component libraries are designed for marketing pages: generous spacing, rounded everything, default sizes that assume one button per screen. `dense-ui` is designed for dashboards, admin panels, operational tooling, and interfaces where the user is an operator.

**[Docs and live examples ->](https://dense-ui.vercel.app)** · **[Powering SpendBoard ->](https://github.com/codejupiter/Spendboard)**

```bash
npm install dense-ui
```

> Package name is available on npm. Publish with `npm publish --access public` when you are ready to make the package public.

```tsx
import { Button, Input, Table } from "dense-ui"
import "dense-ui/styles.css"

export function Toolbar() {
  return (
    <Button variant="primary" size="sm">
      Save view
    </Button>
  )
}
```

## Why This Exists

I kept reaching for general-purpose libraries on dense tools and fighting the defaults: shrinking controls, tightening tables, undoing oversized spacing, and rebuilding the same wrapper layer. `dense-ui` starts where those overrides usually end.

The opinions are:

- **Density first.** The default size is what many libraries call compact.
- **Keyboard-first.** Components expose visible focus states and Radix-managed focus where focus management is complex.
- **Composition over configuration.** Components stay small and predictable.
- **No CSS-in-JS runtime.** Themes are CSS variables; styles ship as CSS.
- **Tree-shakeable entry points.** Every component has its own package export.

## Components

**Inputs:** Button, Input, Textarea, Select, Combobox, Checkbox, Radio, Switch

**Display:** Table, Badge, Tag, Tooltip

**Overlay:** Popover, Dialog, Toast

**Navigation:** Tabs, CommandPalette

## Design Principles

### Dense Is The Default

The library uses a 4-step density scale that affects control height, spacing, and typography. Set it once on `ThemeProvider`:

```tsx
import { ThemeProvider } from "dense-ui"

<ThemeProvider density={1} theme="dark">
  <App />
</ThemeProvider>
```

### CSS Variables, Not Theme Objects

Themes are CSS variable layers. You can theme a whole app or a single subtree:

```css
[data-theme="ledger"] {
  --dui-bg: #fbfbf8;
  --dui-fg: #171b17;
  --dui-accent: #166b4f;
}
```

### Accessibility Is The Floor

Dialog, Popover, Tooltip, Toast, Tabs, Checkbox, Radio, and Switch are built on Radix primitives. The custom Select and Combobox avoid native `<select>` so they can support large option lists and searchable workflows.

## Stack

| Area | Choice |
|---|---|
| Build | tsup |
| Public docs | Vite playground deployed to Vercel |
| Component QA | Storybook |
| Language | TypeScript with declaration files |
| Primitives | Radix UI |
| Styling | Shipped CSS file with CSS variables |
| Bundle tracking | size-limit |
| Versioning | Changesets |

## Bundle Size

Measured with `npm run size` after `npm run build`.

| Component | Brotli size |
|---|---:|
| Button | 1.24 KB |
| Select | 20.71 KB |
| Table | 328 B |

The Select number includes Radix Popover and icon dependencies. That budget is intentionally explicit so future changes do not hide behind a vague "small bundle" claim.

## Local Setup

```bash
npm install
npm run playground
```

The public docs playground runs at `http://localhost:5173`.

Run Storybook for component QA:

```bash
npm run dev
```

Storybook runs at `http://localhost:6006`.

Build the deployed docs and the library:

```bash
npm run build:docs
npm run build
npm run size
```

## Publishing

```bash
npm run changeset
npm run build
npm publish --access public
```

## Roadmap

- DataGrid with virtualization and column resizing
- DateRangePicker
- NumberInput with formatting
- Splitter for dense workspaces
- Empty, loading, and error primitives

MIT.
