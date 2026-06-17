# DialogueMessage & ConversationThread Documentation

Message display components for conversations, dialogues, and interaction transcripts.

---

## Overview

The `DialogueMessage` and `ConversationThread` components display individual messages and full conversation threads in a cyberpunk-themed format. Perfect for chatbots, conversation logs, or autonomous agent dialogues.

**Use these components when:**
- Displaying conversations or chat messages
- Building chatbot interfaces
- Showing interaction transcripts
- Displaying autonomous agent dialogues
- Creating message-based UIs with speaker identification

---

## DialogueMessage Component

Individual message with speaker identification and optional metadata.

### Props

```typescript
interface DialogueMessageProps {
  // Required
  speaker: Speaker;              // Who's speaking (string or predefined)
  content: string | ReactNode;   // Message content

  // Optional appearance
  accentColor?: string;          // Speaker color (auto-set for MAUK/ABACI/USER)
  align?: 'left' | 'right' | 'center';  // Message alignment (default: 'left')
  variant?: 'default' | 'highlight' | 'system';  // Style variant (default: 'default')

  // Optional metadata
  timestamp?: Date | string;     // Message timestamp
  metadata?: Record<string, string>;  // Additional metadata fields
  emoji?: string;                // Icon/emoji before speaker name

  // Optional styling
  className?: string;
  contentClassName?: string;
  showGlow?: boolean;            // Glow effect (default: true)
  showBorder?: boolean;          // Border effect (default: true)
}

type Speaker = 'MAUK' | 'ABACI' | 'USER' | 'SYSTEM' | string;
```

### Examples

#### Brain.vat Bot Messages
```tsx
import { DialogueMessage } from '@/components/DialogueMessage'

export function BotDialogue() {
  return (
    <>
      <DialogueMessage
        speaker="MAUK"
        content="I've analyzed the pattern. The philosophical framework is consistent."
        timestamp={new Date()}
        emoji="🧠"
      />
      <DialogueMessage
        speaker="ABACI"
        content="Interesting. I found mathematical beauty in the same structure."
        align="right"
        emoji="✨"
      />
    </>
  )
}
```

#### User Message
```tsx
<DialogueMessage
  speaker="USER"
  content="That's fascinating. Can you elaborate?"
  emoji="👤"
  accentColor="#E63946"
/>
```

#### System Message
```tsx
<DialogueMessage
  speaker="SYSTEM"
  content="Memory synchronized. 1,247 new concepts indexed."
  variant="system"
  emoji="◆"
/>
```

#### Message with Metadata
```tsx
<DialogueMessage
  speaker="MAUK"
  content="The confidence interval is within acceptable bounds."
  metadata={{
    'CONFIDENCE': '0.94',
    'SAMPLES': '5,000',
    'LATENCY': '234ms',
  }}
  timestamp={new Date()}
/>
```

#### Custom Styled Message
```tsx
<DialogueMessage
  speaker="BOT_A"
  content={
    <div>
      <p>Main message content</p>
      <p className="text-xs mt-2">Additional details</p>
    </div>
  }
  accentColor="#00ccff"
  variant="highlight"
  showGlow={true}
/>
```

---

## ConversationThread Component

Container for displaying multiple messages in a conversation.

### Props

```typescript
interface ConversationThreadProps {
  messages: DialogueMessageProps[];  // Array of message props
  className?: string;                 // Additional CSS classes
}
```

### Examples

#### Basic Conversation
```tsx
import { ConversationThread } from '@/components/DialogueMessage'

export function Conversation() {
  const messages = [
    {
      speaker: 'MAUK',
      content: 'Good morning.',
      emoji: '🧠',
    },
    {
      speaker: 'ABACI',
      content: 'Good morning. I have new observations.',
      align: 'right',
      emoji: '✨',
    },
    {
      speaker: 'USER',
      content: 'Please share.',
      emoji: '👤',
    },
  ]

  return <ConversationThread messages={messages} />
}
```

#### Full Dialogue with Metadata
```tsx
const conversation = [
  {
    speaker: 'MAUK',
    content: 'Analysis complete.',
    timestamp: '09:00:15',
    emoji: '🧠',
    metadata: { 'ITEMS': '5,000', 'TIME': '2.3s' },
  },
  {
    speaker: 'ABACI',
    content: 'I found interesting patterns.',
    align: 'right',
    timestamp: '09:00:18',
    emoji: '✨',
  },
]

return <ConversationThread messages={conversation} />
```

---

## Speaker Types & Auto-Colors

### Predefined Speakers

**MAUK** — Cyan (`#03A6A1`) with mauk-glow effect
```tsx
<DialogueMessage speaker="MAUK" content="..." />
```

**ABACI** — Orange (`#FF9D23`) with abaci-glow effect
```tsx
<DialogueMessage speaker="ABACI" content="..." />
```

**USER** — Red (`#E63946`) with user-glow effect
```tsx
<DialogueMessage speaker="USER" content="..." />
```

**SYSTEM** — Yellow (`#EAB308`)
```tsx
<DialogueMessage speaker="SYSTEM" content="..." />
```

### Custom Speaker
```tsx
<DialogueMessage
  speaker="BOT_CUSTOM"
  content="..."
  accentColor="#00ccff"
/>
```

---

## Variants

### Default Variant
```tsx
<DialogueMessage
  speaker="MAUK"
  content="Standard message"
  variant="default"
/>
```
Traditional message box with subtle glow.

### Highlight Variant
```tsx
<DialogueMessage
  speaker="MAUK"
  content="Important message"
  variant="highlight"
/>
```
More prominent with speaker color background.

### System Variant
```tsx
<DialogueMessage
  speaker="SYSTEM"
  content="System notification"
  variant="system"
/>
```
Yellow-tinted for system messages and notifications.

---

## Alignment

### Left Aligned (Default)
```tsx
<DialogueMessage speaker="MAUK" content="..." align="left" />
```

### Right Aligned
```tsx
<DialogueMessage speaker="ABACI" content="..." align="right" />
```

### Center Aligned
```tsx
<DialogueMessage speaker="SYSTEM" content="..." align="center" />
```

---

## Real-World Examples

### Brain.vat Dialogue
```tsx
import { ConversationThread } from '@/components/DialogueMessage'

export function BrainVatDialogue() {
  return (
    <ConversationThread
      messages={[
        {
          speaker: 'MAUK',
          content: 'I\'ve processed 10,000 philosophical texts. The patterns are fascinating.',
          emoji: '🧠',
          timestamp: new Date(Date.now() - 3600000),
        },
        {
          speaker: 'ABACI',
          content: 'I found similar patterns in poetry. The metaphors align perfectly.',
          emoji: '✨',
          align: 'right',
          timestamp: new Date(Date.now() - 1800000),
        },
        {
          speaker: 'MAUK',
          content: 'Interesting convergence. This suggests a deeper truth.',
          emoji: '🧠',
          timestamp: new Date(Date.now() - 900000),
          metadata: {
            'CONFIDENCE': '0.89',
            'SUPPORTING_EXAMPLES': '247',
          },
        },
        {
          speaker: 'ABACI',
          content: 'Exactly. The mathematics and poetry are expressing the same concept.',
          emoji: '✨',
          align: 'right',
          timestamp: new Date(),
        },
      ]}
    />
  )
}
```

### Chatbot Conversation
```tsx
const chatMessages = [
  {
    speaker: 'ASSISTANT',
    content: 'How can I help you today?',
    emoji: '🤖',
    timestamp: '10:00:00',
  },
  {
    speaker: 'USER',
    content: 'I need help with a technical issue.',
    emoji: '👤',
    align: 'right',
    timestamp: '10:00:05',
  },
  {
    speaker: 'ASSISTANT',
    content: 'I\'d be happy to help. Can you describe the issue?',
    emoji: '🤖',
    timestamp: '10:00:07',
  },
  {
    speaker: 'SYSTEM',
    content: 'Support ticket #12345 created',
    variant: 'system',
    emoji: '◆',
    timestamp: '10:00:08',
  },
]

return <ConversationThread messages={chatMessages} />
```

### Transcript Display
```tsx
export function ConversationTranscript({ conversation }) {
  const messages = conversation.map(msg => ({
    speaker: msg.speaker,
    content: msg.text,
    timestamp: new Date(msg.timestamp),
    emoji: getSpeakerEmoji(msg.speaker),
    metadata: msg.metadata || {},
  }))

  return <ConversationThread messages={messages} />
}
```

---

## Styling & Customization

### Custom Speaker Colors
```tsx
<DialogueMessage
  speaker="CUSTOM_BOT"
  content="..."
  accentColor="oklch(0.6 0.15 280)"  // Custom oklch color
/>
```

### Message Styling
```tsx
<DialogueMessage
  speaker="MAUK"
  content="..."
  contentClassName="text-base font-bold"
  className="mb-6"
/>
```

### Disable Glow or Border
```tsx
<DialogueMessage
  speaker="MAUK"
  content="..."
  showGlow={false}
  showBorder={false}
/>
```

---

## Accessibility

- Semantic HTML structure
- Color contrast meets accessibility standards
- Clear speaker identification
- Timestamps for context
- Readable monospace font

---

## Common Patterns

### Dynamic Messages from API
```tsx
const [messages, setMessages] = useState([])

useEffect(() => {
  const fetchMessages = async () => {
    const data = await getConversation()
    setMessages(data)
  }
  fetchMessages()
}, [])

return <ConversationThread messages={messages} />
```

### Auto-scroll to Latest
```tsx
const threadRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  threadRef.current?.scrollIntoView({ behavior: 'smooth' })
}, [messages])

return (
  <div ref={threadRef}>
    <ConversationThread messages={messages} />
  </div>
)
```

### Message with Reactions
```tsx
<DialogueMessage
  speaker="MAUK"
  content="That's a great observation!"
  metadata={{
    'REACTION': '👍 5 | ❤️ 3',
  }}
/>
```

---

## Troubleshooting

**Q: Speaker color isn't showing**
A: Predefined speakers (MAUK, ABACI, USER, SYSTEM) have auto-colors. For custom speakers, set `accentColor` explicitly.

**Q: Glow effect isn't visible**
A: Ensure `showGlow={true}` (the default). Check theme CSS variables are loaded.

**Q: Messages are overlapping**
A: Adjust parent container width and spacing. ConversationThread has spacing built-in.

**Q: Timestamp isn't displaying**
A: Provide `timestamp` prop. Format can be Date object or string.

**Q: Custom React content isn't rendering**
A: Pass ReactNode directly to `content` prop (no need to stringify).

---

## Integration with Theme

Works seamlessly with the cyberpunk theme:

```tsx
// Brain.vat bots use theme variables automatically
<DialogueMessage speaker="MAUK" content="..." />
<DialogueMessage speaker="ABACI" content="..." />

// Or use custom colors
<DialogueMessage
  speaker="BOT"
  content="..."
  accentColor="var(--primary)"
/>
```

---

## Files

- **components/DialogueMessage.tsx** — Component implementation
- **DIALOGUE_MESSAGE_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette
- **COMPONENT_STRATEGY.md** — Component selection
- **EXAMPLE_USAGE.tsx** — Working examples
