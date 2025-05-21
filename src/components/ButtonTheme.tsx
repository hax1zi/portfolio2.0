import { Moon, Sun } from "@phosphor-icons/react";
import { useDarkTheme } from "../store/useDarkTema";
import { AnimatePresence, motion } from "framer-motion";

export default function ButtonThema() {
  const { darkTheme, toggleTheme } = useDarkTheme();
  const Icon = darkTheme ? Moon : Sun;

  const handleClick = () => {
    setTimeout(() => {
      toggleTheme();
    }, 300);
  };

  return (
    <button
      onClick={() => handleClick()}
      aria-label={`Mudar para tema ${darkTheme ? "claro" : "escuro"}`}
      className="dark:hover:bg-gray p-2 rounded-md hover:bg-gray/30 font-medium overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={darkTheme ? "moon" : "sun"}
          initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: { type: "spring", damping: 10, stiffness: 150 },
          }}
          exit={{
            scale: 0.8,
            opacity: 0,
            rotate: 15,
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={28} />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
