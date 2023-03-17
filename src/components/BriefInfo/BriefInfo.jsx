const Address = ({
  id,
  name,
  lastName,
  prefix,
  title,
  imageUrl,
  company,
  suffix,
}) => {
  return (
    <div
      className="flex flex-col gap-1
      border rounded-md py-2 cursor-pointer hover:scale-110 "
    >
      <img
        src={`${imageUrl}?id=${id}_${Math.random()}`}
        alt={`${name} ${lastName}`}
      />
      <p className="font-normal  px-2">
        {prefix} {name} {lastName}
      </p>
      <p className="px-2 font-normal">{`${title} at ${company}  ${suffix}`}</p>
    </div>
  );
};
export default Address;
