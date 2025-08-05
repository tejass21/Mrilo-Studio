import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--mrilo-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--mrilo-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--mrilo-elements-terminal-textColor'),
    background: cssVar('--mrilo-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--mrilo-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--mrilo-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--mrilo-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--mrilo-elements-terminal-color-black'),
    red: cssVar('--mrilo-elements-terminal-color-red'),
    green: cssVar('--mrilo-elements-terminal-color-green'),
    yellow: cssVar('--mrilo-elements-terminal-color-yellow'),
    blue: cssVar('--mrilo-elements-terminal-color-blue'),
    magenta: cssVar('--mrilo-elements-terminal-color-magenta'),
    cyan: cssVar('--mrilo-elements-terminal-color-cyan'),
    white: cssVar('--mrilo-elements-terminal-color-white'),
    brightBlack: cssVar('--mrilo-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--mrilo-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--mrilo-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--mrilo-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--mrilo-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--mrilo-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--mrilo-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--mrilo-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
