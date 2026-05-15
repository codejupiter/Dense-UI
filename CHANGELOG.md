# Changelog

All notable changes to Dense UI are documented here.

## 0.1.0 - 2026-05-15

### Added

- Released the first package-ready Dense UI component library surface for dense dashboards, admin tools, and operational interfaces.
- Added explicit package exports for root imports, per-component entry points, TypeScript declarations, CJS builds, ESM builds, and `styles.css`.
- Added API documentation covering import patterns, theming, component inventory, package exports, bundle budgets, and publishing checks.
- Added accessibility documentation for primitive behavior, consumer responsibilities, density guidance, and QA strategy.
- Added Playwright smoke coverage for the docs playground, live preview, overlays, toast flow, command palette, and desktop/mobile overflow.
- Added CI gates for production audit, lint, typecheck, unit tests, package build, docs build, bundle-size checks, package dry run, and browser smoke tests.
- Added release notes, release checklist, security policy, issue forms, PR template, and Dependabot configuration.

### Verified

- Docs: https://dense-ui.vercel.app
- CI validates the package artifact, docs build, size budgets, and browser behavior.
- `npm pack --dry-run` verifies the publishable package contents before release.

### Known Limitations

- The package is release-ready but not yet published to npm.
- Visual regression snapshots are not yet automated.
- DataGrid, DateRangePicker, NumberInput, Splitter, and empty/loading/error primitives remain roadmap items.
