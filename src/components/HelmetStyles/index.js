import React from "react";
import Helmet from "react-helmet";

function HelmetStyles({ COLORS, trackToggle }) {
  return (
    <Helmet>
      <script>
        {`
        function runner(){ 
        function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        if (hasPersistedPreference) {
            return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
            if (mql.matches) {
                localStorage.setItem("color-mode", 'dark' );
                return 'dark'
            } else {
                localStorage.setItem("color-mode", 'light' );
                return 'light'
            }
        }
        localStorage.setItem("color-mode", 'light' );
        return 'light';
        }
        const colorMode = getInitialColorMode();
        const forceRender = ${trackToggle}
        const root = document.documentElement;
        root.style.setProperty(
            '--color-text',
            colorMode === 'light'
            ? '${COLORS.text.light}'
            : '${COLORS.text.dark}'
        );
        root.style.setProperty(
            '--color-background',
            colorMode === 'light'
            ? '${COLORS.background.light}'
            : '${COLORS.background.dark}'
        );
        root.style.setProperty(
            '--color-primary',
            colorMode === 'light'
            ? '${COLORS.primary.light}'
            : '${COLORS.primary.dark}'
        );
        root.style.setProperty('--initial-color-mode', colorMode);
        }
        runner()                
    `}
      </script>
    </Helmet>
  );
}

export default HelmetStyles