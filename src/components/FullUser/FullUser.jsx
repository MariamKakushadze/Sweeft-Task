const FullUser = ({ id, name, lastName, prefix, title, imageUrl }) => {
  const settings = [
    {
      id: 1,
      title: "Job Descpription:",
      description: "blasdsdsddada",
    },
    {
      id: 2,
      title: "Job Area:",
      description: "bladdsdsada",
    },
    {
      id: 3,
      title: "Job Type:",
      description: "bladdsdsada",
    },
    {
      id: 4,
      title: "Email:",
      description: "1234@gmail.com",
    },
    {
      id: 5,
      title: "IP Adrress:",
      description: "12121212",
    },
  ];

  return (
    <div
      className="flex flex-col gap-1
      border rounded-md py-2 cursor-pointer hover:scale-110 "
    >
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="flex gap-1 ml-0 sm:max-w-[37.5 rem] min-w-[18.5 rem] px-2"
        >
          <p className="font-normal text-xs">{setting.title}</p>
          <span className="font-light text-xs">{setting.description}</span>
        </div>
      ))}
    </div>
  );
};
export default FullUser;