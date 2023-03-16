import { Link } from "react-router-dom";
import { React } from "react";

function Back() {
  return (
    <Link to="/">
      <h2 className="py-5 text-red-800 text-lg text-left float-left">
        ← HomePage
      </h2>
    </Link>
  );
}

export default Back;
