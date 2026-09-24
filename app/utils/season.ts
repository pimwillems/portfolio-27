const SEASONS = ['Winter', 'Spring', 'Summer', 'Autumn'] as const

/**
 * Meteorological season label for a date, e.g. "Autumn 2026".
 * Winter runs Dec–Feb and keeps the year it started in (Jan 2027 → "Winter 2026").
 */
export function seasonLabel(date: Date = new Date()): string {
  const month = date.getMonth() // 0 = Jan
  const season = SEASONS[Math.floor(((month + 1) % 12) / 3)]!
  const year = month < 2 ? date.getFullYear() - 1 : date.getFullYear()
  return `${season} ${year}`
}
