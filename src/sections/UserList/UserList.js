import { Card } from "components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/30`
      )
      .then((res) => {
        const data = res.data.list;
        setUsers((prevData) => [...prevData, ...data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className="grid grid-cols-1 flex-col justify-center items-center gap-5 px-10 sm:grid-cols-2 xl:grid-cols-3
  "
    >
      {users.map((user, i) => (
        <Link key={i} to={`${user.id}`}>
          <Card
            name={user.name}
            lastName={user.lastName}
            title={user.title}
            prefix={user.prefix}
            imageUrl={user.imageUrl}
            id={user.id}
          />
        </Link>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};
export default List;
