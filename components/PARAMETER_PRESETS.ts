import { ParameterConfig } from './BotParameterPanel'

/**
 * Pre-built parameter configurations for common use cases
 * Use these as templates or customize for your project
 */

// LLM Generation Parameters (temperature, top-p, etc.)
export const llmGenerationParams: ParameterConfig[] = [
  {
    key: 'temperature',
    label: 'Temperature',
    type: 'range',
    min: 0.1,
    max: 2.0,
    step: 0.05,
    group: 'Generation',
    description: 'Control randomness: lower = stable, higher = creative',
    formatDisplay: (v) => v.toFixed(2),
  },
  {
    key: 'top_p',
    label: 'Top-P (Nucleus Sampling)',
    type: 'range',
    min: 0.1,
    max: 1.0,
    step: 0.01,
    group: 'Generation',
    description: 'Cumulative probability threshold for token selection',
    formatDisplay: (v) => v.toFixed(2),
  },
  {
    key: 'top_k',
    label: 'Top-K',
    type: 'number',
    min: 0,
    max: 100,
    step: 1,
    group: 'Generation',
    description: 'Sample from K most likely tokens (0 = disabled)',
    formatDisplay: (v) => v === 0 ? 'UNLIMITED' : v,
  },
  {
    key: 'repetition_penalty',
    label: 'Repetition Penalty',
    type: 'range',
    min: 1.0,
    max: 2.5,
    step: 0.05,
    group: 'Generation',
    description: 'Penalize repeated tokens: higher = less repetition',
    formatDisplay: (v) => v.toFixed(2),
  },
  {
    key: 'max_new_tokens',
    label: 'Max Response Length',
    type: 'number',
    min: 10,
    max: 500,
    step: 10,
    group: 'Generation',
    description: 'Maximum tokens to generate',
    formatDisplay: (v) => `${v} tokens`,
  },
]

// Timing & Loop Parameters
export const timingParams: ParameterConfig[] = [
  {
    key: 'base_sleep',
    label: 'Loop Frequency',
    type: 'number',
    min: 10,
    max: 600,
    step: 10,
    group: 'Timing',
    description: 'Time between loop iterations',
    formatDisplay: (v) => `${v}s`,
  },
  {
    key: 'base_jitter',
    label: 'Jitter',
    type: 'number',
    min: 0,
    max: 120,
    step: 5,
    group: 'Timing',
    description: 'Random delay variation per iteration',
    formatDisplay: (v) => `±${v}s`,
  },
  {
    key: 'timeout',
    label: 'Request Timeout',
    type: 'number',
    min: 5,
    max: 300,
    step: 5,
    group: 'Timing',
    description: 'Maximum time per request',
    formatDisplay: (v) => `${v}s`,
  },
]

// Memory & Behavior Parameters
export const memoryParams: ParameterConfig[] = [
  {
    key: 'memory_weight',
    label: 'Memory Recall Power',
    type: 'range',
    min: 0,
    max: 1,
    step: 0.05,
    group: 'Memory',
    description: 'Probability of long-term memory retrieval',
    formatDisplay: (v) => `${(v * 100).toFixed(0)}%`,
  },
  {
    key: 'memory_cutoff_days',
    label: 'Memory Lookback',
    type: 'number',
    min: 1,
    max: 365,
    step: 1,
    group: 'Memory',
    description: 'How many days back to search memory',
    formatDisplay: (v) => `${v} days`,
  },
  {
    key: 'banned_words',
    label: 'Banned Words/Tokens',
    type: 'textarea',
    rows: 4,
    group: 'Behavior',
    description: 'Comma-separated list of tokens to suppress during generation',
  },
  {
    key: 'system_prompt_version',
    label: 'System Prompt',
    type: 'text',
    group: 'Behavior',
    description: 'Version identifier (e.g., v1, v2-safety, experimental)',
  },
]

// API & Rate Limiting Parameters
export const rateLimitParams: ParameterConfig[] = [
  {
    key: 'max_requests_per_minute',
    label: 'Rate Limit (req/min)',
    type: 'number',
    min: 1,
    max: 1000,
    step: 10,
    group: 'API',
    description: 'Maximum requests allowed per minute',
    formatDisplay: (v) => `${v}/min`,
  },
  {
    key: 'max_tokens_per_hour',
    label: 'Token Budget (1h)',
    type: 'number',
    min: 1000,
    max: 1000000,
    step: 10000,
    group: 'API',
    description: 'Maximum tokens allowed per hour',
    formatDisplay: (v) => `${(v / 1000).toFixed(0)}k tokens`,
  },
  {
    key: 'auto_reject_long_inputs',
    label: 'Auto-Reject Long Inputs',
    type: 'text',
    group: 'API',
    description: 'Reject requests longer than (words): e.g., "5000"',
  },
  {
    key: 'api_key_rotation_days',
    label: 'API Key Rotation',
    type: 'number',
    min: 1,
    max: 365,
    step: 1,
    group: 'API',
    description: 'Rotate API keys every N days',
    formatDisplay: (v) => `${v} days`,
  },
]

// Game Server Parameters
export const gameServerParams: ParameterConfig[] = [
  {
    key: 'max_players',
    label: 'Max Players',
    type: 'number',
    min: 1,
    max: 256,
    step: 1,
    group: 'Server',
    formatDisplay: (v) => `${v} players`,
  },
  {
    key: 'difficulty',
    label: 'Difficulty',
    type: 'text',
    group: 'Gameplay',
    description: 'e.g., easy, normal, hard, nightmare',
  },
  {
    key: 'respawn_time',
    label: 'Respawn Time',
    type: 'number',
    min: 1,
    max: 60,
    step: 1,
    group: 'Gameplay',
    formatDisplay: (v) => `${v}s`,
  },
  {
    key: 'pvp_enabled',
    label: 'Enable PvP',
    type: 'text',
    group: 'Gameplay',
    description: 'true or false',
  },
  {
    key: 'backup_interval_minutes',
    label: 'Auto-Backup Interval',
    type: 'number',
    min: 5,
    max: 1440,
    step: 5,
    group: 'Maintenance',
    formatDisplay: (v) => `${v} min`,
  },
]

// Database Parameters
export const databaseParams: ParameterConfig[] = [
  {
    key: 'pool_size',
    label: 'Connection Pool Size',
    type: 'number',
    min: 5,
    max: 200,
    step: 5,
    group: 'Connection',
    formatDisplay: (v) => `${v} connections`,
  },
  {
    key: 'query_timeout_ms',
    label: 'Query Timeout',
    type: 'number',
    min: 100,
    max: 30000,
    step: 100,
    group: 'Performance',
    formatDisplay: (v) => `${v}ms`,
  },
  {
    key: 'max_retries',
    label: 'Retry Attempts',
    type: 'number',
    min: 0,
    max: 10,
    step: 1,
    group: 'Reliability',
  },
  {
    key: 'cache_ttl_seconds',
    label: 'Cache TTL',
    type: 'number',
    min: 0,
    max: 3600,
    step: 60,
    group: 'Performance',
    description: '0 = disabled',
    formatDisplay: (v) => v === 0 ? 'DISABLED' : `${v}s`,
  },
  {
    key: 'enable_query_logging',
    label: 'Query Logging',
    type: 'text',
    group: 'Debugging',
    description: 'true or false',
  },
]

// Content Moderation Parameters
export const contentModerationParams: ParameterConfig[] = [
  {
    key: 'toxicity_threshold',
    label: 'Toxicity Threshold',
    type: 'range',
    min: 0,
    max: 1,
    step: 0.05,
    group: 'Safety',
    description: 'Score above threshold triggers filtering (0 = most strict)',
    formatDisplay: (v) => `${(v * 100).toFixed(0)}%`,
  },
  {
    key: 'block_sexual_content',
    label: 'Block Sexual Content',
    type: 'text',
    group: 'Safety',
    description: 'true or false',
  },
  {
    key: 'block_violence',
    label: 'Block Violence',
    type: 'text',
    group: 'Safety',
    description: 'true or false',
  },
  {
    key: 'content_filter_version',
    label: 'Filter Version',
    type: 'text',
    group: 'Safety',
    description: 'e.g., v1, v2, custom',
  },
  {
    key: 'user_appeal_allowed',
    label: 'User Can Appeal',
    type: 'text',
    group: 'Moderation',
    description: 'true or false',
  },
  {
    key: 'appeal_response_days',
    label: 'Appeal Response Time',
    type: 'number',
    min: 1,
    max: 30,
    step: 1,
    group: 'Moderation',
    formatDisplay: (v) => `${v} days`,
  },
]

// Analytics & Monitoring Parameters
export const analyticsParams: ParameterConfig[] = [
  {
    key: 'event_sample_rate',
    label: 'Event Sampling',
    type: 'range',
    min: 0,
    max: 1,
    step: 0.1,
    group: 'Data Collection',
    description: 'Percentage of events to track (0-100%)',
    formatDisplay: (v) => `${(v * 100).toFixed(0)}%`,
  },
  {
    key: 'retention_days',
    label: 'Data Retention',
    type: 'number',
    min: 7,
    max: 730,
    step: 7,
    group: 'Data Management',
    formatDisplay: (v) => `${v} days`,
  },
  {
    key: 'enable_user_tracking',
    label: 'User Tracking',
    type: 'text',
    group: 'Privacy',
    description: 'true or false (GDPR compliant)',
  },
  {
    key: 'export_format',
    label: 'Export Format',
    type: 'text',
    group: 'Data Export',
    description: 'json, csv, or parquet',
  },
]

// Combine multiple parameter sets
export const brainVatAdminParams: ParameterConfig[] = [
  ...llmGenerationParams,
  ...timingParams,
  ...memoryParams,
  // Exclude API params if not needed in brain.vat
]

// Utility: Combine parameter sets
export function combineParameterSets(...sets: ParameterConfig[][]): ParameterConfig[] {
  return sets.flat()
}

// Export preset factory
export const parameterPresets = {
  llmGeneration: llmGenerationParams,
  timing: timingParams,
  memory: memoryParams,
  rateLimit: rateLimitParams,
  gameServer: gameServerParams,
  database: databaseParams,
  contentModeration: contentModerationParams,
  analytics: analyticsParams,
  brainVatAdmin: brainVatAdminParams,
}
