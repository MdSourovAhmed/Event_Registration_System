import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import EventList from "../components/EventList";

function Events() {
  // const [events, setEvents] = useState([]);
  // const { user, loading } = useContext(AuthContext);

  // useEffect(() => {
  //   api
  //     .get("/events")
  //     .then((res) => setEvents(res.data))
  //     .catch((err) => console.error("Error fetching Events:", err));
  // }, []);

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
    <div className="container flex-col mx-auto z-1 p-4 rounded-lg">
      <h2 className="text-2xl font-bold p-4 mb-4">Events</h2>
      <EventList events={events} />
    </div>
  );
}

export default Events;
