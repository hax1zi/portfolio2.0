import About from "../components/About";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { cn } from "../utils/cn";
import { useMenuMobile } from "../store/useMenuMobile";
import { useEffect, useState } from "react";

export default function LeadingPage() {
  const { menuMobile } = useMenuMobile();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (menuMobile === true) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    } else {
      setShow(false)
    }
  }, [menuMobile]);
  return (
    <main
      className={cn(
        "dark:bg-black dark:text-light bg-[#F0F0F0] text-text",
        show && "invisible"
      )}
    >
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
