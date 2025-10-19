export default function Error({ message }) {
  return (
    <div className="flex w-full h-full justify-center items-center font-light text-1xl">
      <div className="flex">
        <h1 className="pr-2 mr-2 border-r">
          404
        </h1>
        <div className="flex items-center">
          <h2 className="">{message}</h2>
        </div>
      </div>
    </div>
  );
}
