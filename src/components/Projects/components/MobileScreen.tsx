interface MobileScreenProps {
  image: string;
}

export default function MobileScreen({ image }: MobileScreenProps) {
  return (
    <div className="absolute -right-14 bottom-0">
      <div className="border-8 rounded-md  shadow-2xl">
        <img src={image} width={120} />
      </div>
    </div>
  );
}
