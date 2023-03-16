import { Card, FullUser, Address } from "components";

const FullInfo = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-5 px-10 sm:grid-cols-2 ">
      <Card />
      <div className="flex sm:flex-col">
        <FullUser />
        <Address />
      </div>
    </div>
  );
};

export default FullInfo;
