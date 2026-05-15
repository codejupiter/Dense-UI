# Accessibility Notes

`dense-ui` is compact, but compact does not mean cramped or keyboard-hostile. The library treats accessibility as a baseline contract for operational interfaces.

## Design Contract

- Focus states must be visible at every density.
- Components that manage complex focus behavior use Radix primitives.
- Compact controls preserve readable type and stable hit areas.
- Tables stay semantic and composable instead of becoming div-only grids.
- Overlay components must support escape-key dismissal and focus management.

## Primitive Coverage

| Area | Implementation |
|---|---|
| Dialog | Radix Dialog handles focus trapping, escape key, and aria title/description wiring. |
| Popover | Radix Popover handles anchored content and dismissal behavior. |
| Tooltip | Radix Tooltip handles hover/focus trigger behavior. |
| Toast | Radix Toast handles announcement and viewport behavior. |
| Tabs | Radix Tabs handles tab/tabpanel semantics. |
| Checkbox | Radix Checkbox handles checked state and keyboard behavior. |
| Radio | Radix Radio Group handles roving selection behavior. |
| Switch | Radix Switch handles switch role and checked state. |
| CommandPalette | Built with `cmdk` inside a Radix Dialog. |

## Consumer Responsibilities

Some accessibility requirements belong to the application using the library:

- Provide labels for icon-only buttons.
- Use meaningful table headers.
- Keep validation errors connected to fields with app-level messaging.
- Avoid hiding required context inside hover-only tooltips.
- Test high-density screens at real viewport sizes.

## Testing Strategy

Automated coverage currently includes:

- Component rendering tests with Testing Library.
- ThemeProvider attribute tests.
- Playwright smoke tests for the docs playground.
- Dialog and command-palette interaction checks.
- Horizontal overflow checks across desktop and mobile Chromium.

Manual QA should include:

- Keyboard-only navigation through docs/demo surfaces.
- Screen-reader spot checks for overlay components.
- High contrast inspection for focus rings and status colors.
- Mobile viewport checks for dense tables and toolbar wrapping.

## Density Guidance

Use lower density values for operational tools where users repeatedly scan and compare information. Use higher density values for settings pages, onboarding flows, or less frequent workflows.

```tsx
<ThemeProvider density={1} theme="dark">
  <TradingDashboard />
</ThemeProvider>

<ThemeProvider density={3} theme="light">
  <AccountSettings />
</ThemeProvider>
```

