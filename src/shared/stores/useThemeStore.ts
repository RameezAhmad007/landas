import { create } from "zustand";

export type ThemeMode = "light" | "dark" | "system";

type Resolved = "light" | "dark";

interface ThemeState {
  mode: ThemeMode; // user choice
  resolved: Resolved; // actual applied theme (system → light/dark)
  setMode: (mode: ThemeMode) => void;
  init: () => void;
}

/* resolve 'system' -> 'light' | 'dark' based on OS */
function resolveMode(mode: ThemeMode): Resolved {
  if (mode === "system") {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return mode;
}

/* apply to <html> */
function applyToDOM(resolved: Resolved) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
}

/* media listener references so we can cleanly add/remove */
let media: MediaQueryList | null = null;
let mediaListener: ((e: MediaQueryListEvent) => void) | null = null;

const useThemeStore = create<ThemeState>((set) => ({
  mode: "system",
  resolved: "light",

  setMode: (mode) => {
    // update state
    const nextResolved = resolveMode(mode);
    set({ mode, resolved: nextResolved });

    // persist user choice
    try {
      localStorage.setItem("theme", mode);
    } catch (err) {
      if (err && typeof err === "object" && "message" in err) {
        console.error((err as { message: string }).message);
      } else {
        console.error(err);
      }
    }

    // apply to DOM
    applyToDOM(nextResolved);

    // manage system listener
    if (media && mediaListener) {
      media.removeEventListener?.("change", mediaListener);
      mediaListener = null;
      media = null;
    }
    if (mode === "system" && typeof window !== "undefined") {
      media = window.matchMedia("(prefers-color-scheme: dark)");
      mediaListener = (e) => {
        const resolved = e.matches ? "dark" : "light";
        set({ resolved });
        applyToDOM(resolved);
      };
      media.addEventListener?.("change", mediaListener);
    }
  },

  init: () => {
    // load saved or default to system
    let saved: ThemeMode | null = null;
    try {
      saved = (localStorage.getItem("theme") as ThemeMode | null) || null;
    } catch (err) {
      if (err && typeof err === "object" && "message" in err) {
        console.error((err as { message: string }).message);
      } else {
        console.error(err);
      }
    }

    const initialMode: ThemeMode = saved ?? "system";
    const initialResolved = resolveMode(initialMode);

    set({ mode: initialMode, resolved: initialResolved });
    applyToDOM(initialResolved);

    // set listener if system
    if (initialMode === "system" && typeof window !== "undefined") {
      media = window.matchMedia("(prefers-color-scheme: dark)");
      mediaListener = (e) => {
        const resolved = e.matches ? "dark" : "light";
        set({ resolved });
        applyToDOM(resolved);
      };
      media.addEventListener?.("change", mediaListener);
    }
  },
}));

export default useThemeStore;
