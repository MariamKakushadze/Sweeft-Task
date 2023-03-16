import { Back } from "components";
import { UserInfo } from "sections";

const FullInfo = () => {
  return (
    <div className="flex flex-col  gap-5 px-10 ">
      <Back />
      <UserInfo />
    </div>
  );
};

export default FullInfo;
