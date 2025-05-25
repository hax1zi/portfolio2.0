import { useEffect, useState } from "react";
import { useDarkTheme } from "./store/useDarkTema";
import LeadingPage from "./pages/LeadingPage";
import Header from "./components/Header";
import Introduction from "./pages/Introduction";
import HeaderMobile from "./components/HeaderMobile";
function App() {
  const { darkTheme } = useDarkTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkTheme === null ? false : darkTheme);
  }, [darkTheme]);

  const [hasStarted, setHasStarted] = useState<boolean>(false);


  return (
    <>
      <Introduction setStart={setHasStarted} />
      {hasStarted && (
        <>
          <Header />
          <HeaderMobile />
          <LeadingPage />
        </>
      )}
    </>
  );
}

export default App;
