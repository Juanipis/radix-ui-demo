import * as React from "react";
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";
import { DEFAULT_CSS_LIB, SUPPORTED_CSS_LIBS } from "./constants";
import type { CssLib } from "./constants";

const LOCAL_STORAGE_CSS_LIB_KEY = "@radix-ui/css-lib";
const LOCAL_STORAGE_ACCENT_COLOR_KEY = "@radix-ui/accent-color";

// Extending the context value type to include accent color preferences
type CssLibPreferenceContextValue = {
  preferredCssLib: CssLib;
  setPreferredCssLib: (lib: CssLib) => void;
  accentColor: string; // Add accent color to the context
  setAccentColor: (color: string) => void; // Add a setter for the accent color
};

const CssLibPreferenceContext =
  React.createContext<CssLibPreferenceContextValue | null>(null);

const CssLibPreferenceProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [preferredCssLib, setPreferredCssLib] =
    React.useState<CssLib>(DEFAULT_CSS_LIB);
  const [accentColor, setAccentColor] = React.useState<string>("crimson"); // Default accent color
  const [loading, setLoading] = React.useState<boolean>(true); // Default accent color

  const savePreferredCssLib = React.useCallback((lib: unknown) => {
    if (isValidCssLib(lib)) {
      setPreferredCssLib(lib);
      setLocalStorageItem(LOCAL_STORAGE_CSS_LIB_KEY, lib);
    } else {
      setPreferredCssLib(DEFAULT_CSS_LIB);
      setLocalStorageItem(LOCAL_STORAGE_CSS_LIB_KEY, DEFAULT_CSS_LIB);
    }
  }, []);

  const saveAccentColor = React.useCallback((color: string) => {
    setAccentColor(color);
    setLocalStorageItem(LOCAL_STORAGE_ACCENT_COLOR_KEY, color);
  }, []);

  useLayoutEffect(() => {
    const localStorageCssLib = window.localStorage.getItem(
      LOCAL_STORAGE_CSS_LIB_KEY
    );
    savePreferredCssLib(localStorageCssLib);

    const localStorageAccentColor = window.localStorage.getItem(
      LOCAL_STORAGE_ACCENT_COLOR_KEY
    );
    if (localStorageAccentColor) {
      setAccentColor(localStorageAccentColor);
    }

    setLoading(false); // Set loading to false after fetching from local storage
  }, [savePreferredCssLib]);

  const contextValue = React.useMemo(
    () => ({
      preferredCssLib,
      setPreferredCssLib: savePreferredCssLib,
      accentColor, // Provide accent color in context
      setAccentColor: saveAccentColor, // Provide method to update accent color
    }),
    [preferredCssLib, savePreferredCssLib, accentColor, saveAccentColor]
  );

  if (loading) {
    return;
  }

  return (
    <CssLibPreferenceContext.Provider value={contextValue}>
      {children}
    </CssLibPreferenceContext.Provider>
  );
};

function setLocalStorageItem(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

const isValidCssLib = (lib: unknown): lib is CssLib =>
  SUPPORTED_CSS_LIBS.includes(lib as CssLib);

const useCssLibPreference = () => {
  const context = React.useContext(CssLibPreferenceContext);
  if (!context) {
    throw new TypeError(
      "`useCssLibPreference` must be called from within a `CssLibPreferenceProvider`."
    );
  }
  return context;
};

export { CssLibPreferenceProvider, useCssLibPreference };
