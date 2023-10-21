import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center text-center relative">
      <h1 className="text-5xl font-raleway font-extrabold text-red-600 animate-bounce mt-10">
        404
      </h1>
      <img
        className="w-1/2 mx-auto"
        src={
          "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        }
        alt=""
      />
      <div className="lg:relative bottom-32">
        <p className="text-2xl text-green-600 mb-4">
          It looks like you're lost in space.
        </p>
        <p className="text-red-600 font-semibold mb-4">
          The page you're searching for is out of reach.
        </p>
        <Link className="btn btn-warning" to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
