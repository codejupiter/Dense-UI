# Design Principles

`dense-ui` is for data-heavy product surfaces where the user is trying to compare, scan, decide, and move on.

## Dense By Default

The default component height is intentionally compact. Airy interfaces can scale up with `density={3}` or `density={4}`, but operational tools should not spend their first week fighting oversized defaults.

## Keyboard First

Every interactive component exposes a visible focus state. Components with hard focus problems use Radix primitives so focus trapping, roving focus, escape handling, and aria wiring are handled by a proven accessibility layer.

## CSS Variables Over Runtime Themes

Themes are data attributes and CSS variables. That keeps runtime cost low and makes it easy to theme a single subtree without a provider-heavy architecture.

## Tables Are A First-Class Surface

The table is deliberately plain and compact. It is meant to be composed with sorting, virtualization, filtering, and row actions from the consuming app rather than becoming a large opinionated grid too early.
