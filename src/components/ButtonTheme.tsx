import { Moon, Sun } from "@phosphor-icons/react";
import { useDarkTheme } from "../store/useDarkTema";
import Button from "./Button";

export default function ButtonThema() {
  const { darkTheme, toggleTheme } = useDarkTheme();
  const Icon = darkTheme ? Moon : Sun;

  return (
    <Button
      variant="ghost"
      onClick={() => toggleTheme()}
      aria-label={`Mudar para tema ${darkTheme ? "claro" : "escuro"}`}
    >
      <Icon size={28} />
    </Button>
  );
}
