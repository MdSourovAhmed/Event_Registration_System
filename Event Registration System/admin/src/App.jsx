import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Registrations from "./pages/Registrations";
import Events from "./pages/Events";
import EventManagement from "./pages/EventManagement"; // New
import UserManagement from "./pages/UserManagement"; // New
import RegistrationManagement from "./pages/RegistrationManagement"; // New

import EventList from "./components/EventList";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/events" element={<EventManagement />} />{" "}
            <Route path="/admin/users" element={<UserManagement />} />{" "}
            <Route
              path="/admin/registrations"
              element={<RegistrationManagement />}
            />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

