import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import EventList from "../components/EventList";

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events');
        console.log(response.data);
        setEvents(response.data);
      } catch (err) {
        setError('Failed to fetch events');
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className=" bg-amber-600 container flex-col mx-auto z-1">
      <h2 className="text-2xl font-bold p-4 mb-4">Events</h2>
      <EventList events={events} />
    </div>
  );
}

export default Events;
