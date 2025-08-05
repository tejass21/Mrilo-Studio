import { atom } from 'nanostores';

export type Theme = 'dark' | 'light';

export const kTheme = 'bolt_theme';

export function themeIsDark() {
  return true; // Always return true for dark theme
}

// Change default theme to dark
export const DEFAULT_THEME = 'dark';

export const themeStore = atom<Theme>(DEFAULT_THEME);

function initStore() {
  return DEFAULT_THEME; // Always return dark theme
}

export function toggleTheme() {
  // Theme switching is disabled
  return;
}
