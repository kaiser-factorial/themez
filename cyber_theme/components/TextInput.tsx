'use client'

import {
  useLayoutEffect, useRef, useState, type ReactNode, type KeyboardEvent,
} from 'react'

/**
 * Auto-fitting text input.
 *
 * Behaviour: the text starts at `maxFontSize`. As you type and the content
 * would overflow one line, the font shrinks toward `minFontSize` to keep it on
 * a single line. Once it hits `minFontSize` and still overflows, the field
 * switches to multi-line: it wraps and auto-grows its height.
 *
 * Styling comes from the `.ti-*` classes defined in the showcase page, so the
 * HTML/CSS tab and this React component look identical — this only adds the
 * resize behaviour and the interactive bits.
 */
export interface TextInputProps {
  /** Field width (number = px). Default: full width of container. */
  width?: number | string
  /** Initial single-line height in px. Default 44. */
  height?: number
  /** Smallest the text shrinks to (px). Default 12. */
  minFontSize?: number
  /** Starting / largest text size (px). Default 22. */
  maxFontSize?: number
  placeholder?: string
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onSend?: (value: string) => void
  label?: string
  helperText?: string
  error?: boolean | string
  disabled?: boolean
  leading?: ReactNode
  trailing?: ReactNode
}

const MONO =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

export function TextInput({
  width,
  height = 44,
  minFontSize = 12,
  maxFontSize = 22,
  placeholder,
  defaultValue,
  value: controlled,
  onChange,
  onSend,
  label,
  helperText,
  error,
  disabled,
  leading,
  trailing,
}: TextInputProps) {
  const [internal, setInternal] = useState(defaultValue ?? '')
  const value = controlled ?? internal
  const [fontSize, setFontSize] = useState(maxFontSize)
  const [multiline, setMultiline] = useState(false)
  const [focused, setFocused] = useState(false)

  const taRef = useRef<HTMLTextAreaElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)

  const errText = typeof error === 'string' ? error : undefined
  const hasError = Boolean(error)

  // Decide font size + single/multi-line based on how wide the text would be.
  useLayoutEffect(() => {
    const ta = taRef.current
    const span = measureRef.current
    if (!ta || !span) return
    const avail = ta.clientWidth
    span.style.fontSize = `${maxFontSize}px`
    span.textContent = value.length ? value : placeholder ?? ''
    const widthAtMax = span.getBoundingClientRect().width

    if (widthAtMax <= avail || widthAtMax === 0) {
      setFontSize(maxFontSize)
      setMultiline(false)
      return
    }
    const scaled = maxFontSize * (avail / widthAtMax)
    if (scaled >= minFontSize) {
      setFontSize(scaled)
      setMultiline(false)
    } else {
      setFontSize(minFontSize)
      setMultiline(true)
    }
  }, [value, placeholder, minFontSize, maxFontSize])

  // Auto-grow height in multi-line mode; fixed single-line height otherwise.
  useLayoutEffect(() => {
    const ta = taRef.current
    if (!ta) return
    if (multiline) {
      ta.style.height = 'auto'
      ta.style.height = `${ta.scrollHeight}px`
    } else {
      ta.style.height = ''
    }
  }, [multiline, value, fontSize])

  const update = (v: string) => {
    if (controlled === undefined) setInternal(v)
    onChange?.(v)
  }

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onSend && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend(value)
    }
  }

  return (
    <div style={{ width: typeof width === 'number' ? `${width}px` : width }}>
      {label && <label className="ti-label">{label}</label>}
      <div
        className={`ti-field${hasError ? ' ti-error' : ''}${disabled ? ' ti-disabled' : ''}${focused ? ' ti-focused' : ''}`}
        style={{
          minHeight: height,
          alignItems: multiline ? 'flex-end' : 'center',
        }}>
        {leading && <div className="ti-adornment">{leading}</div>}
        <textarea
          ref={taRef}
          className="ti-input"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          wrap={multiline ? 'soft' : 'off'}
          onChange={(e) => update(e.target.value)}
          onKeyDown={handleKey}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: 1.4,
            whiteSpace: multiline ? 'pre-wrap' : 'nowrap',
            overflow: 'hidden',
            resize: 'none',
            transition: 'font-size 0.08s linear',
          }}
        />
        {trailing && <div className="ti-adornment">{trailing}</div>}
      </div>
      {(errText || helperText) && (
        <div className={`ti-help${hasError ? ' ti-error-text' : ''}`}>
          {errText ?? helperText}
        </div>
      )}
      {/* hidden measurer — must match the input's font metrics */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: -99999,
          top: 0,
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontFamily: MONO,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
