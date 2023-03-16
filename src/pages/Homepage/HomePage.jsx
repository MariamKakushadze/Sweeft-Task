import { Header } from "components";
import { List } from "sections";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <Header />
      <List
        page={page}
        setPage={setPage}
        apiUrl={`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/30`}
      />
    </div>
  );
};

export default HomePage;
