import { useEffect } from "react";
import { useDarkTheme } from "./store/useDarkTema";
import LeadingPage from "./pages/LeadingPage";
function App() {
  const { darkTheme } = useDarkTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <main className="dark:bg-black dark:text-light bg-white text-text">
      <LeadingPage />
    </main>
  );
}

export default App;
