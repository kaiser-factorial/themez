'use client'

import {
  createContext,
  useContext,
  type ReactNode,
  type ReactElement,
} from 'react'

/**
 * Lightweight, dependency-free stand-in for the Radix-based shadcn/ui tooltip.
 * Implements the subset of the API the cyber components use:
 *   TooltipProvider, Tooltip (controlled `open`), TooltipTrigger (`asChild`),
 *   TooltipContent (`side`, `className`).
 */

const TooltipCtx = createContext<{ open: boolean }>({ open: false })

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function Tooltip({
  open = false,
  children,
}: {
  open?: boolean
  children: ReactNode
}) {
  return (
    <TooltipCtx.Provider value={{ open }}>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        {children}
      </span>
    </TooltipCtx.Provider>
  )
}

export function TooltipTrigger({
  asChild,
  children,
}: {
  asChild?: boolean
  children: ReactElement | ReactNode
}) {
  // `asChild` simply renders the child as the trigger; we don't need to clone
  // refs for this static showcase.
  return <>{children}</>
}

export function TooltipContent({
  side = 'top',
  className,
  children,
}: {
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  children: ReactNode
}) {
  const { open } = useContext(TooltipCtx)
  if (!open) return null

  const position: React.CSSProperties =
    side === 'bottom'
      ? { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 }
      : side === 'left'
        ? { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 }
        : side === 'right'
          ? { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 }
          : { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 }

  return (
    <div
      role="tooltip"
      className={className}
      style={{ position: 'absolute', pointerEvents: 'none', ...position }}>
      {children}
    </div>
  )
}
