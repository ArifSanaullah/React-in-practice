import React from 'react'
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggler() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button onClick={toggleTheme} style={{backgroundColor: theme.background, color: theme.foreground}}>Toggle Theme</button>
            )}
        </ThemeContext.Consumer>
    )
}
