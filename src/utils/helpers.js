/**
 * Clamps a number between min and max
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

/**
 * Linear interpolation
 */
export const lerp = (a, b, t) => a + (b - a) * t

/**
 * Debounce
 */
export function debounce(fn, delay = 150) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Format a number with commas
 */
export const formatNumber = (n) =>
  new Intl.NumberFormat('en-US').format(n)
