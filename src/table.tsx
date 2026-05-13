import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { cn } from './lib/cn'

export const Table = forwardRef<HTMLTableElement, TableHTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <table className={cn('dui-table', className)} ref={ref} {...props} />
))

Table.displayName = 'Table'

export const THead = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
  <thead className={cn('dui-thead', className)} ref={ref} {...props} />
))

THead.displayName = 'THead'

export const TBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
  <tbody className={cn('dui-tbody', className)} ref={ref} {...props} />
))

TBody.displayName = 'TBody'

export const TR = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
  <tr className={cn('dui-tr', className)} ref={ref} {...props} />
))

TR.displayName = 'TR'

export const TH = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
  <th className={cn('dui-th', className)} ref={ref} {...props} />
))

TH.displayName = 'TH'

export const TD = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
  <td className={cn('dui-td', className)} ref={ref} {...props} />
))

TD.displayName = 'TD'
