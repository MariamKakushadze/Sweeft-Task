const FullUser = ({
  job,
  area,
  type,
  email,
  ip,
  zip,
  city,
  street,
  country,
  state,
}) => {
  const settings = [
    {
      id: 1,
      title: "Job Description:",
      description: job,
    },
    {
      id: 2,
      title: "Job Area:",
      description: area,
    },
    {
      id: 3,
      title: "Job Type:",
      description: type,
    },
    {
      id: 4,
      title: "Email:",
      description: email,
    },
    {
      id: 5,
      title: "IP Adrress:",
      description: ip,
    },
    {
      id: 6,
      title: "Zip Code:",
      description: zip,
      city,
      street,
      country,
      state,
    },
    {
      id: 7,
      title: "City:",
      description: city,
    },
    {
      id: 8,
      title: "Street:",
      description: street,
    },
    {
      id: 9,
      title: "Country:",
      description: country,
    },
    {
      id: 10,
      title: "State:",
      description: state,
    },
  ];

  return (
    <div
      className="flex flex-col gap-1
      border rounded-md py-2 cursor-pointer hover:scale-110 w-full md:p-8"
    >
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="flex gap-1 ml-0 sm:max-w-[37.5 rem] min-w-[18.5 rem] px-2"
        >
          <p className="font-normal text-sm md:text-[16px]">{setting.title}</p>
          <span className="font-light text-sm md:text-[16px]">
            {setting.description}
          </span>
        </div>
      ))}
    </div>
  );
};
export default FullUser;
