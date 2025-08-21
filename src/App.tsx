import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import ScrollToTop from "./shared/hooks/useScrollToTop";
import ThemeFloatingSwitcher from "@shared/components/molecules/ThemeFloatingSwitcher";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />

      <ThemeFloatingSwitcher />
    </BrowserRouter>
  );
};

export default App;
