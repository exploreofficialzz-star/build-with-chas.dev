import { createContext, useContext } from "react";

export type ThemeValue = { dark: boolean; toggle: () => void };

export const ThemeContext = createContext<ThemeValue>({ dark: false, toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}
