import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo, useState } from 'react'
import {
  Badge,
  Button,
  Checkbox,
  Combobox,
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
  Tooltip,
  type SelectOption,
} from '../index'
import '../styles.css'

const meta: Meta = {
  title: 'dense-ui/Components',
  decorators: [
    (Story) => (
      <ThemeProvider density={2} theme="light" style={{ minWidth: 760, padding: 24 }}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta

type Story = StoryObj

export const Buttons: Story = {
  render: () => (
    <div className="docs-row">
      <Button variant="primary" size="sm">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost" size="lg">Ghost</Button>
    </div>
  ),
}

export const Inputs: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8, width: 320 }}>
      <Input placeholder="Merchant" />
      <Textarea placeholder="Notes" />
    </div>
  ),
}

export const Selects: Story = {
  render: function SelectStory() {
    const [value, setValue] = useState('merchant-1')
    const options = useMemo<SelectOption[]>(
      () => Array.from({ length: 1000 }, (_, index) => ({ label: `Merchant ${index + 1}`, value: `merchant-${index + 1}` })),
      [],
    )
    return <Select options={options} value={value} onValueChange={setValue} />
  },
}

export const Comboboxes: Story = {
  render: function ComboboxStory() {
    const [value, setValue] = useState('aws')
    const options: SelectOption[] = [
      { label: 'AWS', value: 'aws' },
      { label: 'Vercel', value: 'vercel' },
      { label: 'Linear', value: 'linear' },
      { label: 'Figma', value: 'figma' },
    ]
    return <Combobox options={options} value={value} onValueChange={setValue} />
  },
}

export const Choices: Story = {
  render: () => (
    <div className="docs-row">
      <Checkbox defaultChecked aria-label="Selected" />
      <RadioGroup defaultValue="one" className="docs-row" aria-label="Choice">
        <Radio value="one" />
        <Radio value="two" />
      </RadioGroup>
      <Switch defaultChecked />
    </div>
  ),
}

export const Badges: Story = {
  render: () => (
    <div className="docs-row">
      <Badge tone="success">Cleared</Badge>
      <Badge tone="warning">Pending</Badge>
      <Badge tone="danger">Flagged</Badge>
      <Tag tone="info" onRemove={() => undefined}>SaaS</Tag>
    </div>
  ),
}

export const Tables: Story = {
  render: () => (
    <Table>
      <THead>
        <TR>
          <TH>Merchant</TH>
          <TH>Status</TH>
          <TH>Amount</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>Vercel</TD>
          <TD><Badge tone="success">Cleared</Badge></TD>
          <TD>$2,400.00</TD>
        </TR>
        <TR>
          <TD>AWS</TD>
          <TD><Badge tone="danger">Flagged</Badge></TD>
          <TD>$12,408.22</TD>
        </TR>
      </TBody>
    </Table>
  ),
}

export const Overlays: Story = {
  render: () => (
    <div className="docs-row">
      <Tooltip content="Tooltip content">
        <Button>Tooltip</Button>
      </Tooltip>
      <Popover content={<div style={{ width: 160 }}>Popover content</div>}>
        <Button>Popover</Button>
      </Popover>
      <Dialog title="Dialog" description="Radix-managed focus." trigger={<Button>Dialog</Button>}>
        <Button variant="primary">Confirm</Button>
      </Dialog>
    </div>
  ),
}

export const TabSets: Story = {
  render: () => (
    <Tabs defaultValue="one">
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two">Two</TabsTrigger>
      </TabsList>
      <TabsContent value="one">First panel</TabsContent>
      <TabsContent value="two">Second panel</TabsContent>
    </Tabs>
  ),
}
