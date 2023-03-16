import axios from "axios";
import { useEffect, useState } from "react";
import { FullUser, BriefInfo } from "components";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <BriefInfo
        name={user.name}
        lastName={user.lastName}
        prefix={user.prefix}
        title={user.title}
        imageUrl={user.imageUrl}
        company={user.company?.name}
        suffix={user.company?.suffix}
      />
      <FullUser
        job={user.jobDescriptor}
        area={user.jobArea}
        type={user.jobType}
        email={user.email}
        ip={user.ip}
        zip={user.address?.zipCode}
        city={user.address?.city}
        street={user.address?.streetAddress}
        country={user.address?.country}
        state={user.address?.state}
      />
    </div>
  );
};
export default UserInfo;
