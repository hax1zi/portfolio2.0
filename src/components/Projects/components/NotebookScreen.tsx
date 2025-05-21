export default function NotebookScreen({ image }: { image: string }) {
  return (
    <div className="flex flex-col justify-center items-center" aria-hidden="true">
      <div className="border-8 rounded-t-md  dark:border-gray-light">
        <img src={image} width={500} />
      </div>
      <div className="w-full h-4  dark:bg-gray-light rounded-b-md bg-gray" />
      <div
        className="w-14 h-16 dark:bg-gray-light bg-gray"
        style={{ boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.25) inset" }}
      />
      <div className="w-60 h-2 dark:bg-gray-light bg-gray rounded-2xl"/>
    </div>
  );
}
