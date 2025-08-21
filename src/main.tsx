import { createRoot } from "react-dom/client";
import "./shared/styles/global.css";
import App from "./App.tsx";
import useThemeStore from "./shared/stores/useThemeStore.ts";

// Initialize theme before mount
useThemeStore.getState().init();

createRoot(document.getElementById("root")!).render(<App />);
