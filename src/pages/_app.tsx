import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { Theme } from "@radix-ui/themes";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SyntaxSchemeProvider } from "../../components/Pre";
import { Favicon } from "../../components/Favicon";
import { CssLibPreferenceProvider } from "../../components/CssLibPreference";

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Theme accentColor="indigo" className="radix-themes-custom-fonts">
      <SyntaxSchemeProvider scheme="indigo">
        <Favicon />
        <Component {...pageProps} />
      </SyntaxSchemeProvider>
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
