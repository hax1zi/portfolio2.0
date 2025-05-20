import { useState } from "react";
import About from "../components/About";
import Home from "../components/Home";
import Introduction from "./Introduction";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Contact from "../components/Contact";

export default function LeadingPage() {
  const [start, setStart] = useState<boolean>(false);
  return (
    <>
      <Introduction setStart={setStart} />
      {start && (
        <>
          <Header />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}
