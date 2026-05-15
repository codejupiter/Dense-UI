import { Boxes, Code2, Database, Keyboard, Package, Rows3, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  Badge,
  Button,
  Checkbox,
  Combobox,
  CommandPalette,
  Dialog,
  Input,
  Popover,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Table,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Textarea,
  ThemeProvider,
  Toast,
  ToastProvider,
  ToastViewport,
  Tooltip,
  type SelectOption,
} from './index'

const componentGroups = [
  ['Inputs', 'Button, Input, Textarea, Select, Combobox'],
  ['Choices', 'Checkbox, Radio, Switch'],
  ['Display', 'Table, Badge, Tag, Tooltip'],
  ['Overlays', 'Popover, Dialog, Toast, Command Palette'],
]

const spendRows = [
  ['Vercel', 'SaaS', 'Cleared', '$2,400.00'],
  ['AWS', 'Cloud', 'Flagged', '$12,408.22'],
  ['Linear', 'SaaS', 'Pending', '$96.00'],
  ['Figma', 'Design', 'Cleared', '$1,440.00'],
  ['Datadog', 'Cloud', 'Pending', '$3,200.00'],
]

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [density, setDensity] = useState<1 | 2 | 3 | 4>(2)
  const [selectValue, setSelectValue] = useState('linear')
  const [comboValue, setComboValue] = useState('aws')
  const [commandOpen, setCommandOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const merchantOptions = useMemo<SelectOption[]>(
    () =>
      Array.from({ length: 1000 }, (_, index) => {
        const names = ['Linear', 'Vercel', 'Figma', 'AWS', 'Ramp', 'Mercury', 'Brex', 'Datadog']
        const label = index < names.length ? names[index] : `Merchant ${String(index + 1).padStart(4, '0')}`
        return { label, value: label.toLowerCase().replace(/\s+/g, '-') }
      }),
    [],
  )

  return (
    <ThemeProvider className="docs-shell" data-testid="docs-shell" density={density} theme={theme}>
      <ToastProvider>
        <header className="docs-topbar">
          <a className="docs-brand" href="https://github.com/codejupiter/Dense-UI">
            <span>
              <Rows3 size={16} />
            </span>
            dense-ui
          </a>
          <nav className="docs-nav" aria-label="Documentation sections">
            <a href="#principles">Principles</a>
            <a href="#components">Components</a>
            <a href="#install">Install</a>
          </nav>
          <div className="docs-actions">
            <Button variant="ghost" asChild>
              <a href="https://github.com/codejupiter/Spendboard">SpendBoard</a>
            </Button>
            <Switch checked={theme === 'dark'} onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} />
          </div>
        </header>

        <main className="docs-main">
          <section className="docs-hero">
            <div className="docs-hero-copy">
              <Badge tone="success">Dense by default</Badge>
              <h1>Components for data-heavy interfaces.</h1>
              <p>
                A React library for dashboards, admin panels, and operational tools where scanning
                speed matters more than decorative whitespace.
              </p>
              <div className="docs-cta">
                <Button variant="primary" asChild>
                  <a href="#components">Explore components</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://github.com/codejupiter/Dense-UI">GitHub</a>
                </Button>
              </div>
              <div className="docs-stats" aria-label="Library stats">
                <span>15 exports</span>
                <span>Radix primitives</span>
                <span>CSS variables</span>
                <span>Size-limit tracked</span>
              </div>
            </div>

            <section className="docs-console" aria-label="Live dense-ui preview" data-testid="live-preview">
              <div className="console-head">
                <span>Spend review</span>
                <div>
                  <Badge tone="info">Density {density}</Badge>
                  <Badge tone={theme === 'dark' ? 'neutral' : 'success'}>{theme}</Badge>
                </div>
              </div>
              <div className="console-toolbar">
                <label className="console-search">
                  <Search size={14} />
                  <Input placeholder="Search merchants" />
                </label>
                <Select options={merchantOptions} value={selectValue} onValueChange={setSelectValue} />
                <Combobox options={merchantOptions} value={comboValue} onValueChange={setComboValue} />
              </div>
              <Table>
                <THead>
                  <TR>
                    <TH>Merchant</TH>
                    <TH>Category</TH>
                    <TH>Status</TH>
                    <TH>Amount</TH>
                  </TR>
                </THead>
                <TBody>
                  {spendRows.map((row) => (
                    <TR key={row[0]}>
                      <TD>{row[0]}</TD>
                      <TD>{row[1]}</TD>
                      <TD>
                        <Badge tone={row[2] === 'Flagged' ? 'danger' : row[2] === 'Pending' ? 'warning' : 'success'}>{row[2]}</Badge>
                      </TD>
                      <TD>{row[3]}</TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            </section>
          </section>

          <section className="docs-band" id="principles">
            <div className="section-heading">
              <span>Design principles</span>
              <h2>Built for operators, not landing pages.</h2>
            </div>
            <div className="principle-grid">
              <article>
                <Database size={18} />
                <h3>Density scales</h3>
                <p>One density setting adjusts typography, height, and spacing across the tree.</p>
              </article>
              <article>
                <Keyboard size={18} />
                <h3>Keyboard-first</h3>
                <p>Visible focus states and Radix-managed behavior for hard accessibility problems.</p>
              </article>
              <article>
                <Code2 size={18} />
                <h3>No runtime themes</h3>
                <p>Theme light, dark, or a subtree with CSS variables instead of JS theme objects.</p>
              </article>
              <article>
                <Package size={18} />
                <h3>Tree-shakeable</h3>
                <p>Each component ships as its own entry point with TypeScript declarations.</p>
              </article>
            </div>
          </section>

          <section className="docs-band split" id="components">
            <div className="docs-panel">
              <div className="panel-head">
                <Boxes size={16} />
                <h2>Component inventory</h2>
              </div>
              <div className="component-list">
                {componentGroups.map(([label, items]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span>{items}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="docs-panel">
              <div className="panel-head">
                <Rows3 size={16} />
                <h2>Live controls</h2>
              </div>
              <div className="docs-row">
                <Button variant="primary">Save view</Button>
                <Button variant="secondary">Review</Button>
                <Button variant="ghost">Dismiss</Button>
              </div>
              <div className="docs-row">
                <Checkbox defaultChecked aria-label="Receipt attached" />
                <RadioGroup defaultValue="ops" className="docs-row" aria-label="Card">
                  <Radio value="ops" />
                  <Radio value="eng" />
                </RadioGroup>
                <Switch defaultChecked />
                <Tag tone="info" onRemove={() => undefined}>
                  SaaS
                </Tag>
              </div>
              <Textarea placeholder="Internal note" />
            </div>
          </section>

          <section className="docs-band split">
            <div className="docs-panel">
              <div className="panel-head">
                <Keyboard size={16} />
                <h2>Overlay primitives</h2>
              </div>
              <div className="docs-row">
                <Tooltip content="Compact controls still need visible focus and usable hit areas.">
                  <Button>Tooltip</Button>
                </Tooltip>
                <Popover content={<div className="popover-copy">Popover content stays compact and keyboard reachable.</div>}>
                  <Button>Popover</Button>
                </Popover>
                <Dialog
                  title="Approve spend"
                  description="Review the selected transaction before approval."
                  trigger={<Button>Dialog</Button>}
                >
                  <div className="docs-row">
                    <Button variant="primary">Approve</Button>
                    <Button variant="secondary">Cancel</Button>
                  </div>
                </Dialog>
              </div>
              <div className="docs-row">
                <Button onClick={() => setToastOpen(true)}>Toast</Button>
                <Button onClick={() => setCommandOpen(true)}>Command palette</Button>
              </div>
            </div>

            <div className="docs-panel" id="install">
              <div className="panel-head">
                <Code2 size={16} />
                <h2>Install</h2>
              </div>
              <pre className="install-block"><code>{`npm install dense-ui
import "dense-ui/styles.css"`}</code></pre>
              <Tabs defaultValue="button">
                <TabsList>
                  <TabsTrigger value="button">Button</TabsTrigger>
                  <TabsTrigger value="theme">Theme</TabsTrigger>
                </TabsList>
                <TabsContent value="button">
                  <pre className="code-block"><code>{`import { Button } from "dense-ui"

<Button variant="primary" size="sm">
  Save view
</Button>`}</code></pre>
                </TabsContent>
                <TabsContent value="theme">
                  <pre className="code-block"><code>{`<ThemeProvider density={1} theme="dark">
  <App />
</ThemeProvider>`}</code></pre>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <section className="docs-footer">
            <span>Storybook remains in the repo for component QA.</span>
            <Select
              options={[
                { label: 'Density 1', value: '1' },
                { label: 'Density 2', value: '2' },
                { label: 'Density 3', value: '3' },
                { label: 'Density 4', value: '4' },
              ]}
              placeholder="Density"
              value={String(density)}
              onValueChange={(value) => setDensity(Number(value) as 1 | 2 | 3 | 4)}
            />
          </section>

          <CommandPalette
            actions={[
              { id: 'save', label: 'Save current view', onSelect: () => setToastOpen(true) },
              { id: 'theme', label: 'Toggle theme', onSelect: () => setTheme(theme === 'dark' ? 'light' : 'dark') },
            ]}
            open={commandOpen}
            onOpenChange={setCommandOpen}
          />
          <Toast open={toastOpen} onOpenChange={setToastOpen} title="View saved" description="The dense-ui toast is powered by Radix." />
          <ToastViewport />
        </main>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
