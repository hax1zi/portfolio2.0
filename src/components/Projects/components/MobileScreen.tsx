import { cn } from "../../../utils/cn";

type MobileScreenProps = {
  image: string;
  direction?: "left" | "";
};

export default function MobileScreen({ image, direction }: MobileScreenProps) {
  return (
    <div
      className={cn(
        "absolute bottom-0 max-lg:scale-70",
        direction === "left"
          ? "-left-14 max-lg:left-6"
          : "-right-14 max-lg:right-6"
      )}
      role="mobile"
      aria-label="Projeto na tela de smartphone"
    >
      <div className="border-8 rounded-md shadow-xl">
        <img src={image} width={120} />
      </div>
    </div>
  );
}
