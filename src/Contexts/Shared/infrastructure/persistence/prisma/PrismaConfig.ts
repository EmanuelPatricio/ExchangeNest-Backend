type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
type LogLevel = 'info' | 'query' | 'warn' | 'error'
type LogDefinition = {
  emit: 'stdout' | 'event'
  level: LogLevel
}

interface PrismaConfig {
  errorFormat: ErrorFormat,
  log: (LogLevel | LogDefinition)[]
}

export default PrismaConfig;