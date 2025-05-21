export default function MobileScreen({ image }: { image: string }) {
  return (
    <div className="absolute -right-14 bottom-0"  aria-hidden="true">
      <div className="border-8 rounded-md shadow-xl">
        <img src={image} width={120} />
      </div>
    </div>
  );
}
