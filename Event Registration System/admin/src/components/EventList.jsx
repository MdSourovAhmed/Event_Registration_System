import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";

function EventList({ events }) {
  const {res,setRes}=useState([]);
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = async (eventId) => {
      try {
        const response=await api.post("/registrations", { eventId });
        setRes(response.message);
        setTimeout(() => navigate("/registrations"), 1000);
      } catch (err) {
        console.error(err.response?.data?.message || "Failed to register");
      }
    // }
  };

  return (
    <div className="">
      {events.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No events added yet.</p>
      ) : (
        <div className="bg-gray-800 grid items-center grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-3 lg:items-center gap-4">
          {events.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
      )}
    </div>
  );
}

export default EventList;


