import { type ReactElement } from 'react'
import {
  Badge, Button, Alert, Spinner, Progress, StatsDisplay, Breadcrumb, Timeline,
  ConversationThread, MissionStatement, TechnicalSchematic, MemoryGrid,
  BotNameCardGrid, ParameterPanel, AuditLogCard, LoadingBar,
} from '@primary/components/PrimaryComponents'

const BLUE = 'var(--p-blue)', RED = 'var(--p-red)', YEL = '#b89600', BLACK = 'var(--p-black)'

function ButtonsDemo() {
  return (
    <div className="row mt-1" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button>Default</Button>
      <Button variant="red">Red</Button>
      <Button variant="blue">Blue</Button>
      <Button variant="yellow">Yellow</Button>
      <Button variant="green">Green</Button>
      <Button variant="outline">Outline</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

function BadgesDemo() {
  return (
    <div>
      <div className="demo-label">Outline Variants</div>
      <div className="row mt-1">
        <Badge>Default</Badge><Badge color="red">Red</Badge><Badge color="blue">Blue</Badge>
        <Badge color="yellow">Yellow</Badge><Badge color="green">Green</Badge>
      </div>
      <div className="demo-label mt-2">Solid Variants</div>
      <div className="row mt-1">
        <Badge solid color="black">Black</Badge><Badge solid color="red">Red</Badge><Badge solid color="blue">Blue</Badge>
        <Badge solid color="yellow">Yellow</Badge><Badge solid color="green">Green</Badge>
      </div>
      <div className="demo-label mt-2">With Icons</div>
      <div className="row mt-1">
        <Badge solid color="red">✕ Error</Badge><Badge solid color="blue">ℹ Info</Badge>
        <Badge solid color="yellow">⚠ Warning</Badge><Badge solid color="black">◆ System</Badge>
      </div>
    </div>
  )
}

function AlertsDemo() {
  return (
    <div>
      <Alert severity="info" title="System Notification" message="The primary theme component library has been initialized. All systems nominal." actionLabel="View Details →" />
      <div className="demo-label mt-2">Success</div>
      <Alert severity="success" title="Operation Complete" message="All 14 components have been successfully generated and deployed." />
      <div className="demo-label mt-2">Warning</div>
      <Alert severity="warning" title="Attention Required" message="The Bauhaus grid alignment is off by 2px in the eastern quadrant." />
      <div className="demo-label mt-2">Error</div>
      <Alert severity="error" title="Critical Failure" message="Primary color #EB1A26 could not be loaded. Fallback to #111111 applied." actionLabel="Retry Connection →" />
      <div className="demo-label mt-2">System</div>
      <Alert severity="system" title="System Message" message="Level 7 background pattern: Cantor field initialized." />
      <div className="demo-label mt-2">Compact</div>
      <Alert variant="compact" severity="info" title="INFO" message="Mod stripe pattern cycling at 0.06fps" />
      <Alert variant="compact" severity="error" title="ERROR" message="Face tracking lost" actionLabel="Retry" />
      <div className="demo-label mt-2">Inline</div>
      <Alert variant="inline" severity="info" title="Info" message="Bezier clock multiplier set to 3." dismissible={false} />
    </div>
  )
}

function SpinnersDemo() {
  return (
    <div>
      <div className="row mt-1" style={{ alignItems: 'center' }}>
        <Spinner variant="ring" label="Loading" />
        <span style={{ marginLeft: '2rem' }}><Spinner variant="dots" label="Processing" /></span>
      </div>
      <div className="demo-label mt-2">Sizes</div>
      <div className="row mt-1" style={{ alignItems: 'center' }}>
        <Spinner size="sm" /><span style={{ marginLeft: '1rem' }}><Spinner size="md" /></span>
        <span style={{ marginLeft: '1rem' }}><Spinner size="lg" /></span>
      </div>
    </div>
  )
}

function ProgressDemo() {
  return (
    <div style={{ maxWidth: 500 }}>
      <div className="demo-label">Linear — Blue (75%)</div>
      <Progress value={75} label="Upload Progress" color={BLUE} />
      <div className="demo-label mt-2">Linear — Red, Striped (45%)</div>
      <Progress value={45} label="Error Rate" color={RED} striped />
      <div className="demo-label mt-2">Linear — Yellow, Large (90%)</div>
      <Progress value={90} label="Memory Usage" color="var(--p-yellow)" size="lg" />
      <div className="demo-label mt-2">Small — Minimal (60%)</div>
      <Progress value={60} color={BLACK} size="sm" />
    </div>
  )
}

function StatsDemo() {
  return (
    <StatsDisplay columns={4} stats={[
      { icon: '◉', label: 'Conversations', value: '1,247', valueColor: BLUE, change: '+12 this week', changeType: 'positive' },
      { icon: '▯', label: 'Concepts Indexed', value: '5,847', valueColor: RED, change: '+234 this week', changeType: 'positive' },
      { icon: '◆', label: 'Memory Usage', value: '2.3GB', valueColor: YEL, change: '+0.1GB', changeType: 'neutral' },
      { icon: '⏱', label: 'Uptime', value: '47d 3h', valueColor: BLACK, change: 'Stable', changeType: 'positive' },
    ]} />
  )
}

function BreadcrumbDemo() {
  return <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Themes', href: '#' }, { label: 'Primary', href: '#' }, { label: 'Components' }]} />
}

function TimelineDemo() {
  return (
    <Timeline events={[
      { color: BLUE, title: 'Level 1 — Mod Stripes', text: 'Animated color stripes with grid overlay. Primary colors cycle at 0.06fps.', time: 'Frame 0 — Difficulty: Easy' },
      { color: RED, title: 'Level 2 — Bezier Clock', text: 'Concentric circles with chord connections. Multiplier increases each level.', time: 'Frame 120 — Difficulty: Medium' },
      { color: YEL, title: 'Level 3 — Cantor Field', text: 'Recursive fractal horizontal lines. Symmetric top and bottom halves.', time: 'Frame 240 — Difficulty: Hard' },
      { color: BLACK, title: 'Level 4 — Halftone Rings', text: 'Concentric dot patterns in a grid. Noise-driven size variation.', time: 'Frame 360 — Difficulty: Expert' },
    ]} />
  )
}

function DialogueDemo() {
  return (
    <ConversationThread messages={[
      { speaker: 'GEMINI', color: BLUE, content: 'The Bauhaus approach emphasizes function over form. Every element must serve a purpose.', time: '14:23:07' },
      { speaker: 'USER', color: RED, align: 'right', content: 'Can we add more geometric patterns from the level backgrounds?', time: '14:23:15' },
      { speaker: 'CLAUDE', color: YEL, content: 'Absolutely. The mod stripes, bezier clock, cantor field, halftone rings, wave marks, and primary grid all translate well as CSS background patterns.', time: '14:23:22' },
      { speaker: 'SYSTEM', color: BLACK, italic: true, content: 'Level 5 background pattern loaded: Wave marks initialized.', time: '14:23:30' },
    ]} />
  )
}

function MissionDemo() {
  return (
    <MissionStatement title="[MISSION_EXPERIMENT]" color={RED} version="v1.0.0" actionLabel="View Source →" paragraphs={[
      'The Primary Theme is a research environment for Bauhaus-inspired UI design. It investigates the balance between strict geometric constraints (primary colors, sharp corners, hard shadows) and functional usability in modern web interfaces.',
      'Built from the visual language of the CatchFall game — where primary colors, geometric patterns, and stark contrasts create an immersive, distraction-free experience.',
    ]} />
  )
}

function SchematicDemo() {
  return (
    <TechnicalSchematic title="[SYSTEM_ARCHITECTURE]" color={BLACK} columns={4} items={[
      { component: 'CATCH', location: 'Game Engine', locationColor: RED, role: 'p5.js Canvas' },
      { component: 'FALL', location: 'Physics', locationColor: BLUE, role: 'Collision Detection' },
      { component: 'FACE', location: 'Input', locationColor: YEL, role: 'ml5 FaceMesh' },
      { component: 'THEME', location: 'Design', locationColor: BLACK, role: 'Bauhaus CSS' },
    ]} />
  )
}

function MemoryDemo() {
  return (
    <MemoryGrid columns={[
      { title: 'Blue Concepts', color: BLUE, dotColor: 'var(--p-blue)', items: ['Primary Grid', 'Bezier Clock', 'Mod Stripes', 'Halftone Rings'] },
      { title: 'Red Concepts', color: RED, dotColor: 'var(--p-red)', items: ['Cantor Field', 'Wave Marks', 'Fire Objects'] },
      { title: 'Yellow Concepts', color: YEL, dotColor: 'var(--p-yellow)', items: ['Catch Objects', 'Goal Progress', 'Level Banner', 'Star Shapes', 'Accent Glow'] },
    ]} />
  )
}

function BotCardDemo() {
  return (
    <BotNameCardGrid columns={2} bots={[
      { name: 'CATCH_v1.0', color: BLUE, description: 'Primary game engine. Handles rendering, physics, and input. Built on p5.js with ml5 face tracking.' },
      { name: 'FALL_v1.0', color: RED, description: 'Difficulty scaling system. Manages fire objects, catch objects, and level progression.' },
    ]} />
  )
}

function ParamsDemo() {
  return (
    <ParameterPanel name="GEMINI_CONFIG" color={BLUE} status="ACTIVE"
      values={{ temperature: 0.7, topP: 0.9, systemPrompt: 'You are a helpful assistant following Bauhaus design principles.', maxTokens: 2048 }}
      parameters={[
        { key: 'temperature', label: 'Temperature', type: 'range', min: 0, max: 2, step: 0.01, group: 'Generation' },
        { key: 'topP', label: 'Top-P', type: 'range', min: 0, max: 1, step: 0.01, group: 'Generation' },
        { key: 'systemPrompt', label: 'System Prompt', type: 'textarea', rows: 3, group: 'Behavior' },
        { key: 'maxTokens', label: 'Max Tokens', type: 'number', min: 1, max: 8192, group: 'Behavior' },
      ]} />
  )
}

function AuditDemo() {
  return (
    <AuditLogCard title="LEVEL_TRANSITION" color={BLUE} badge="SUCCESS" time="14:23:45 // 06-16-2026" sections={[
      { title: 'Event Description', type: 'text', color: BLUE, content: '"Player advanced from Level 3 (Cantor Field) to Level 4 (Halftone Rings). Goal: 7/7 captured."' },
      { title: 'Parameters', type: 'grid', content: [
        { key: 'Fire Rate', value: '32', color: RED }, { key: 'Catch Rate', value: '58', color: 'var(--p-yellow)' },
        { key: 'Fire Speed', value: '4.1', color: BLUE }, { key: 'Double Fire', value: 'NO', color: BLACK },
      ] },
      { title: 'Tags', type: 'tags', content: [
        { label: 'Level Up', color: BLUE }, { label: 'Goal Met', color: YEL }, { label: 'Difficulty+', color: BLACK },
      ] },
      { title: 'Stats', type: 'stats', content: [
        { label: 'Score', value: '1,247', color: BLUE }, { label: 'Hearts', value: '3/3', color: RED }, { label: 'Combo', value: '12x', color: YEL },
      ] },
    ]} />
  )
}

function LoadingDemo() { return <LoadingBar color={BLUE} /> }

export const demos: Record<string, () => ReactElement> = {
  buttons: ButtonsDemo,
  badges: BadgesDemo,
  alerts: AlertsDemo,
  spinners: SpinnersDemo,
  progress: ProgressDemo,
  stats: StatsDemo,
  breadcrumb: BreadcrumbDemo,
  timeline: TimelineDemo,
  dialogue: DialogueDemo,
  mission: MissionDemo,
  schematic: SchematicDemo,
  memory: MemoryDemo,
  botcard: BotCardDemo,
  params: ParamsDemo,
  audit: AuditDemo,
  loading: LoadingDemo,
}
