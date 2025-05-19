import { Moon, Sun } from "@phosphor-icons/react";
import { useDarkTheme } from "../store/useDarkTema";
import Button from "./Button";

export default function ButtonThema() {
  const { darkTheme, toggleTheme } = useDarkTheme();

  if (darkTheme) {
    return (
      <Button onClick={() => toggleTheme()} variant="ghost">
        <Moon size={28} />
      </Button>
    );
  }

  return (
    <Button variant="ghost" onClick={() => toggleTheme()}>
      <Sun size={28} />
    </Button>
  );
}
