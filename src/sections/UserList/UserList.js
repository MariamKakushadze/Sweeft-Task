import { Card } from "components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const List = ({ apiUrl, setPage, page }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log("🚀 ~ file: UserList.js:8 ~ List ~ users:", users);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get(`${apiUrl}`)
      .then((res) => {
        const data = res.data.list;
        //filter same cards
        const newData = data.filter((user) => {
          return !users.some((x) => x.id === user.id);
        });
        const uniqueData = [...new Set([...users, ...newData])];
        setUsers(uniqueData);
        setLoading(false);
        //console.log(newData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // fetch new data on scroll
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollTop >= scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setPage]);

  return (
    <div
      className="grid grid-cols-1 flex-col justify-center items-center gap-5 px-10 sm:grid-cols-2 xl:grid-cols-3
  "
    >
      {users.map((user, i) => (
        <Link key={i} to={`/user/${user.id}`}>
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
