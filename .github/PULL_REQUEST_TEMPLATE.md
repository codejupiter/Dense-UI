## Summary

Describe what changed and why.

## Validation

- [ ] `npm audit --omit=dev --audit-level=high`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run test`
- [ ] `npm run build`
- [ ] `npm run build:docs`
- [ ] `npm run size`
- [ ] `npm pack --dry-run`
- [ ] `npm run smoke` when touching docs, styles, overlays, layout, or public component behavior

## Release Notes

- [ ] API docs updated when exports or props change
- [ ] Accessibility docs updated when primitive behavior changes
- [ ] Changelog or release notes updated for release-facing changes
- [ ] No secrets, private tokens, or unrelated generated files included
