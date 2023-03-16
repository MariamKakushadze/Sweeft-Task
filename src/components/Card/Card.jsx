import Img from "./wall.png";

const Header = () => {
  return (
    <div
      className="grid grid-cols-1 flex-col justify-center items-center gap-5 px-10 sm:grid-cols-2 xl:grid-cols-3
  "
    >
      <div
        className="text-xs font-light flex flex-col gap-1
      border rounded-md pb-2 sm:max-w-[37.5 rem] min-w-[18.5 rem] cursor-pointer hover:scale-110"
      >
        <img src={Img} alt="" />
        <p className="font-normal  px-2">Michael Scoffield </p>
        <p className="px-2 ">Corporate Marketing Director</p>
      </div>

      <div
        className="text-xs font-light flex flex-col gap-1
      border rounded-md pb-2 sm:max-w-[37.5 rem] min-w-[18.5 rem] cursor-pointer hover:scale-110"
      >
        <img src={Img} alt="" />
        <p className="font-normal  px-2">Michael Scoffield </p>
        <p className="px-2 ">Corporate Marketing Director</p>
      </div>
    </div>
  );
};
export default Header;
