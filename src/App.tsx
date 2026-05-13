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
    <ThemeProvider className="docs-shell" density={density} theme={theme}>
      <ToastProvider>
        <header className="docs-header">
          <div>
            <h1>dense-ui</h1>
            <p>Dense by default components for operational interfaces.</p>
          </div>
          <div className="docs-actions">
            <Select
              options={[
                { label: 'Density 1', value: '1' },
                { label: 'Density 2', value: '2' },
                { label: 'Density 3', value: '3' },
                { label: 'Density 4', value: '4' },
              ]}
              value={String(density)}
              onValueChange={(value) => setDensity(Number(value) as 1 | 2 | 3 | 4)}
            />
            <Switch checked={theme === 'dark'} onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} />
          </div>
        </header>

        <main className="docs-grid">
          <section className="docs-panel">
            <h2>Controls</h2>
            <div className="docs-row">
              <Button variant="primary">Save</Button>
              <Button variant="secondary">Review</Button>
              <Button variant="ghost">Dismiss</Button>
            </div>
            <div className="docs-row">
              <Input placeholder="Merchant name" />
              <Select options={merchantOptions} value={selectValue} onValueChange={setSelectValue} />
              <Combobox options={merchantOptions} value={comboValue} onValueChange={setComboValue} />
            </div>
            <Textarea placeholder="Internal note" />
          </section>

          <section className="docs-panel">
            <h2>Selections</h2>
            <div className="docs-row">
              <Checkbox defaultChecked aria-label="Receipt attached" />
              <RadioGroup defaultValue="ops" className="docs-row" aria-label="Card">
                <Radio value="ops" />
                <Radio value="eng" />
              </RadioGroup>
              <Switch defaultChecked />
            </div>
            <div className="docs-row">
              <Badge tone="success">Cleared</Badge>
              <Badge tone="warning">Pending</Badge>
              <Tag tone="info" onRemove={() => undefined}>
                SaaS
              </Tag>
            </div>
          </section>

          <section className="docs-panel wide">
            <h2>Dense table</h2>
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
                {[
                  ['Vercel', 'SaaS', 'Cleared', '$2,400.00'],
                  ['AWS', 'Cloud', 'Flagged', '$12,408.22'],
                  ['Linear', 'SaaS', 'Pending', '$96.00'],
                ].map((row) => (
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

          <section className="docs-panel">
            <h2>Overlays</h2>
            <div className="docs-row">
              <Tooltip content="Compact controls still need generous hit testing.">
                <Button>Tooltip</Button>
              </Tooltip>
              <Popover content={<div style={{ width: 180 }}>Popover content stays compact and keyboard reachable.</div>}>
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
          </section>

          <section className="docs-panel">
            <h2>Tabs</h2>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">Spend controls tuned for scanning.</TabsContent>
              <TabsContent value="activity">Keyboard flow and focus states included.</TabsContent>
              <TabsContent value="settings">Theme and density ride CSS variables.</TabsContent>
            </Tabs>
          </section>
        </main>

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
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
