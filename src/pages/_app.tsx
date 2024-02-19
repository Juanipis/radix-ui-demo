import { ThemeProvider } from "next-themes";
import {
  CssLibPreferenceProvider,
  useCssLibPreference,
} from "../../components/CssLibPreference";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Favicon } from "../../components/Favicon";
import { useEffect } from "react";
import { Theme } from "@radix-ui/themes";

function Pages({ Component, pageProps }: AppProps) {
  const { accentColor } = useCssLibPreference();

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accentColor);
  }, [accentColor]);

  return (
    <Theme
      // @ts-ignore
      accentColor={accentColor}
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <Favicon />
      <Component {...pageProps} />
    </Theme>
  );
}

function App(props: AppProps) {
  return (
    <CssLibPreferenceProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: "light-theme", dark: "dark-theme" }}
        defaultTheme="light-theme"
      >
        {/* Wrap Pages with the context provider to access the accent color */}
        <Pages {...props} />
      </ThemeProvider>
    </CssLibPreferenceProvider>
  );
}

export default App;
