const Card = ({ id, name, lastName, prefix, title, imageUrl }) => {
  return (
    <div
      className="text-xs font-light flex flex-col gap-1
      border rounded-md pb-2 sm:max-w-[37.5 rem] min-w-[18.5 rem] cursor-pointer hover:scale-110"
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
