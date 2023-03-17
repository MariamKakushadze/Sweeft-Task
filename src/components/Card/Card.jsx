import { useNavigate } from "react-router-dom";

const Card = ({ id, name, lastName, prefix, title, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/:id");
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="text-xs font-light flex flex-col gap-1
      border rounded-md pb-2 sm:max-w-[37.5 rem] min-w-[18.5 rem] cursor-pointer hover:scale-110"
      onClick={handleClick}
    >
      <img src={`${imageUrl}?${id}`} alt={`${name} ${lastName}`} />
      <p className="font-normal  px-2">
        {prefix} {name} {lastName}
      </p>
      <p className="px-2 ">{title}</p>
    </div>
  );
};
export default Card;
