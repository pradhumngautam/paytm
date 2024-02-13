export const Appbar = () => {
  return (
    <div className="shadow h-16 flex justify-between bg-teal-400 ">
      <div className="flex flex-col justify-center h-full ml-4 font-extrabold text-3xl ">
        Swift-Spend
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 font-semibold">
          Spend mindfully:)
        </div>
        <div className="rounded-full h-16 w-16  flex justify-center mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            <img src="logo.png" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
