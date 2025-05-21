import { useState } from "react";
import { useDarkTheme } from "../../../../store/useDarkTema";
import { navList } from "../navList";
import Button from "../../../Button";
import ButtonThema from "../../../ButtonTheme";

export default function Navbar() {
  const { darkTheme } = useDarkTheme();
  const [selectedLocation, setSelectedLocation] = useState<string>(
    ""
  );

  return (
    <nav className="py-4 w-full  bg-gray-light dark:bg-darker px-side-spacing flex justify-between items-center  ">
      <div className="inline-flex">
        <div className="inline-flex space-x-2 mr-4">
          <img
            src={`/icons/DF-${darkTheme ? "white" : "black"}.svg`}
            alt="David Fontes logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl cursor-default font-medium">DavidFontes</h1>
        </div>
      
      </div>
      <div className="text-xl flex gap-2">
        {navList.map((item) => (
          <a key={item.id} href={item.local} className="text-base">
            <Button
              onClick={() => setSelectedLocation(item.local)}
              activated={item.local === selectedLocation}
              variant="nav"
              key={item.id}
            >
              {item.name}
            </Button>
          </a>
        ))}
        <ButtonThema />
      </div>
    </nav>
  );
}
