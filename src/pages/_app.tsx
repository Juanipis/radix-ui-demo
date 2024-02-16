import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Favicon } from "../../components/Favicon";
import { CssLibPreferenceProvider } from "../../components/CssLibPreference";

function Pages({ Component, pageProps }: AppProps) {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
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
        <Pages {...props} />
      </ThemeProvider>
    </CssLibPreferenceProvider>
  );
}

export default App;
