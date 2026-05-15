# Dense UI Release Checklist

Use this checklist before publishing to npm, creating a GitHub release, or sharing the docs site as a package-quality portfolio artifact.

## Current Release

- Version: `0.1.0`
- Package name: `dense-ui`
- Docs URL: https://dense-ui.vercel.app
- Release notes: [Dense UI v0.1.0](releases/dense-ui-v0.1.0.md)
- Status: release-ready package milestone; npm publishing remains manual.

## Required Gates

Run locally:

```bash
npm audit --omit=dev --audit-level=high
npm run lint
npm run typecheck
npm run test
npm run build
npm run build:docs
npm run size
npm pack --dry-run
npm run smoke
```

Expected result:

- Production audit reports zero high vulnerabilities.
- Unit tests pass.
- Package build emits ESM, CJS, declarations, and `styles.css`.
- Docs build succeeds.
- Size-limit budgets pass for Button, Select, and Table.
- Package dry run includes `dist`, `docs`, `README.md`, `LICENSE`, and `CHANGELOG.md`.
- Playwright smoke tests pass on desktop and mobile Chromium.

## Public Sharing Checklist

- README links to docs, API, accessibility, changelog, release notes, and security policy.
- Docs screenshots render correctly in GitHub.
- API docs describe import patterns and package exports.
- Accessibility docs describe primitive behavior and consumer responsibilities.
- Release notes explain known limits honestly.
- No private tokens, unpublished credentials, or unrelated project files are included in the package.

## npm Publish Checklist

Only publish after the package name and account state are confirmed:

```bash
npm login
npm whoami
npm run build
npm run size
npm pack --dry-run
npm publish --access public
```

After publishing:

- Verify the npm package page.
- Install into a clean Vite or Next.js fixture.
- Import `dense-ui/styles.css`.
- Test root and per-component imports.
- Create a GitHub release linked to the exact published version.

## Next Release Candidates

- `0.2.0`: DataGrid primitives with virtualization guidance.
- `0.3.0`: visual regression checks for the docs playground.
- `0.4.0`: DateRangePicker, NumberInput, and empty/loading/error primitives.
