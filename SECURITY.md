# Security Policy

Dense UI is a React component library for dense dashboards, admin tools, and operational interfaces. It does not process credentials, payment data, customer data, or network requests by itself.

## Supported Versions

| Version | Status |
| --- | --- |
| `0.1.x` | Maintained for portfolio/package readiness |

## Reporting A Vulnerability

Please email security-sensitive reports to info@zoriahcocio.com.

Include:

- A short summary of the issue.
- Affected component, package export, or docs route.
- Reproduction steps.
- Expected impact and any suggested remediation.

Do not include private access tokens, customer data, or unrelated secrets in the report.

## Security Design Notes

- Components do not perform network requests.
- Components do not store secrets.
- Overlay and interactive primitives use Radix UI where focus management is complex.
- Consumers are responsible for escaping untrusted data before rendering it in tables, labels, tooltips, or other content slots.
- Package contents are checked with `npm pack --dry-run` before release.
