import { useContext } from "react";
import { Theme, LOCAL_STAORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface useThemeResult {
    toggleTheme: ()=>void;
    theme: Theme
}

export function useTheme():useThemeResult {

  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK?Theme.LIGHT:Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STAORAGE_THEME_KEY, newTheme)
  }

  return {theme, toggleTheme}

}