# Dense UI v0.1.0 Release Notes

Release date: 2026-05-15  
Status: Release-ready package milestone  
Docs: https://dense-ui.vercel.app

## Summary

Dense UI v0.1.0 packages a compact React component system for data-heavy interfaces: dashboards, admin panels, internal tools, and operator workflows where users need to scan, compare, and act quickly.

The release is intentionally not a marketing-page component kit. It emphasizes dense layout, accessible primitives, CSS-variable theming, explicit package exports, and measurable bundle budgets.

## Product Scope

The current component surface covers:

- Inputs: Button, Input, Textarea, Select, Combobox, Checkbox, Radio, Switch.
- Display: Table, Badge, Tag, Tooltip.
- Overlays: Popover, Dialog, Toast.
- Navigation: Tabs, CommandPalette.
- Theme: ThemeProvider with light/dark mode and density controls.

## Engineering Highlights

- React and TypeScript component library built with tsup.
- Public Vite docs playground deployed to Vercel.
- Storybook setup for component QA.
- Radix UI primitives for complex focus and keyboard behavior.
- CSS variables and a shipped `styles.css` file instead of a CSS-in-JS runtime.
- Root and per-component package exports for bundle-conscious apps.
- ESM, CJS, and TypeScript declaration output.
- Size-limit budgets for representative entry points.
- Testing Library coverage for components and utilities.
- Playwright smoke tests for docs playground flows across desktop and mobile.

## Release Evidence

- API docs: [docs/API.md](../API.md)
- Accessibility docs: [docs/ACCESSIBILITY.md](../ACCESSIBILITY.md)
- Release checklist: [docs/RELEASE_CHECKLIST.md](../RELEASE_CHECKLIST.md)
- Changelog: [CHANGELOG.md](../../CHANGELOG.md)
- Security policy: [SECURITY.md](../../SECURITY.md)
- CI workflow: [.github/workflows/ci.yml](../../.github/workflows/ci.yml)

## Interview Story

This release is built to support a frontend/design-system engineering conversation:

- Why dense operational UI needs different defaults from marketing-oriented design systems.
- How Radix primitives reduce focus-management risk while preserving a custom visual system.
- Why package exports, declaration files, and CSS delivery matter for real consumers.
- How size budgets prevent component-library growth from becoming invisible.
- How docs smoke tests protect the public playground as part of the package surface.
- What remains before a public npm release: visual regression, more usage examples, and first external consumer feedback.

## Known Limits

- Dense UI is release-ready but not yet published to npm.
- Visual regression is not automated yet.
- The roadmap still includes DataGrid, DateRangePicker, NumberInput, Splitter, and empty/loading/error primitives.
