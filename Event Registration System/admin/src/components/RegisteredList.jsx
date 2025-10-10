import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";

function RegisteredList({ registrationData }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleCancel = (eventId) => {
    if (!user) {
      navigate("/login");
    } else {
      api
        .delete(`/registrations/${eventId}`) // better use DELETE for cancel
        .then((res) => {
          console.log("Event canceled:", res.data);
        })
        .catch((err) => console.error("Error canceling the Event:", err));
    }
  };

  const toggleDetails = (eventId) => {
    setSelectedEventId((prev) => (prev === eventId ? null : eventId));
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {registrationData.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No events added yet.</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {registrationData.map((reg) => (
            <EventCard event={reg.event}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegisteredList;
