import { navList } from "./navList";
import Button from "../Button";
import ButtonThema from "../ButtonTheme";

export default function Navbar() {
    return (
        <nav className=" max-sm:pr-8 max-lg:pr-14 lg:pr-side-spacing flex items-center justify-between gap-4">
            <div className="text-base flex items-center gap-2 max-md:hidden max-lg:gap-0">
                {navList.map((item) => (
                    <a key={item.id} href={item.local}>
                        <Button variant="nav" key={item.id}>
                            {item.name}
                        </Button>
                    </a>
                ))}
                <ButtonThema />
            </div>
        </nav>
    );
}
