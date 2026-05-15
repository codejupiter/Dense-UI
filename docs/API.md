# dense-ui API

`dense-ui` ships a root export for convenience and per-component exports for bundle-conscious apps.

## Import Patterns

```tsx
import { Button, Input, Table } from 'dense-ui'
import 'dense-ui/styles.css'
```

```tsx
import { Button } from 'dense-ui/button'
import { Input } from 'dense-ui/input'
import 'dense-ui/styles.css'
```

The CSS file is intentionally separate so consuming apps can decide where global component variables enter their cascade.

## Theming

```tsx
import { ThemeProvider } from 'dense-ui'

<ThemeProvider density={2} theme="dark">
  <App />
</ThemeProvider>
```

| Prop | Type | Default | Description |
|---|---:|---:|---|
| `theme` | `'light' \| 'dark'` | `'light'` | Sets `data-theme` on the provider root. |
| `density` | `1 \| 2 \| 3 \| 4` | `2` | Controls compactness. Lower values are denser. |
| `className` | `string` | `undefined` | Appends classes to the provider root. |

Themes are CSS variables. You can override a full app or a subtree:

```css
[data-theme='ledger'] {
  --dui-bg: #fbfbf8;
  --dui-fg: #171b17;
  --dui-accent: #166b4f;
}
```

## Component Inventory

| Component | Export | Notes |
|---|---|---|
| Button | `dense-ui/button` | Supports `primary`, `secondary`, and `ghost`; supports Radix `Slot` via `asChild`. |
| Input | `dense-ui/input` | Compact text input with visible focus states. |
| Textarea | `dense-ui/input` | Shared input styling for multiline notes. |
| Select | `dense-ui/select` | Searchable custom select with bounded visible options. |
| Combobox | `dense-ui/combobox` | Searchable selection workflow for larger lists. |
| Checkbox | `dense-ui/checkbox` | Radix checkbox primitive. |
| Radio / RadioGroup | `dense-ui/radio` | Radix radio group primitive. |
| Switch | `dense-ui/switch` | Radix switch primitive. |
| Table / THead / TBody / TR / TH / TD | `dense-ui/table` | Compact table primitives for composition with app-level data logic. |
| Badge / Tag | `dense-ui/badge` | Status labels and removable tags. |
| Tooltip | `dense-ui/tooltip` | Radix tooltip primitive. |
| Popover | `dense-ui/popover` | Compact anchored overlays. |
| Dialog | `dense-ui/dialog` | Radix dialog with title, description, trigger, and body. |
| Toast / ToastProvider / ToastViewport | `dense-ui/toast` | Radix toast primitive. |
| Tabs / TabsList / TabsTrigger / TabsContent | `dense-ui/tabs` | Radix tabs primitive. |
| CommandPalette | `dense-ui/command-palette` | `cmdk`-powered action palette. |

## Package Exports

Every component has an explicit subpath export in `package.json`, with ESM, CJS, and TypeScript declaration files.

```json
{
  "exports": {
    "./button": {
      "types": "./dist/button.d.ts",
      "import": "./dist/button.js",
      "require": "./dist/button.cjs"
    }
  }
}
```

This keeps the root API ergonomic while still supporting direct imports in performance-sensitive apps.

## Bundle Budgets

`size-limit` tracks representative entry points:

| Entry | Limit |
|---|---:|
| `dist/button.js` | 2 KB |
| `dist/select.js` | 24 KB |
| `dist/table.js` | 4 KB |

Run:

```bash
npm run build
npm run size
```

## Publishing Checklist

Before publishing:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run build:docs
npm run size
npm pack --dry-run
```

The package tarball should include `dist`, `docs`, `README.md`, and `LICENSE`.

