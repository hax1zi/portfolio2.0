import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed z-[1] w-full h-20 bg-light dark:bg-darker flex flex-col justify-center"
    >
      <Navbar />
    </motion.header>
  );
}
