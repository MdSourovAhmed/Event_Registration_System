import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  return (
   
    <div className="text-center p-5 mx-auto m-10 gap-14">
      {user ? (
        <>
          <h1 className="text-3xl font-bold text-teal-500 m-10">
            Welcome, {user.name || user.email} to the Event Management System
          </h1>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-teal-500 m-10">
            Welcome to the Event Management System
          </h1>
        </>
      )}
      {/* <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
        See all the events.
      </p> */}
      <Link
        to={user ? "/registrations" : "/register"}
        className="bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600"
      >
        Register on Events
      </Link>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
        <Link
          to="/registrations"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-teal-500">Your Registrations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            See The Events You are Registered on.
          </p>
        </Link>
        <Link
          to="/events"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-teal-500">
            See Events
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Find out your Favourite Events and Register.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
