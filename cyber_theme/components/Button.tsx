'use client'

import { type ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'accent'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

/**
 * Cyber terminal button. Renders the `.btn` / `.btn-accent` classes from the
 * showcase stylesheet, so the React and HTML/CSS versions are identical.
 */
export function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  const className = ['btn', variant === 'accent' && 'btn-accent']
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={disabled ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}>
      {children}
    </button>
  )
}
