import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../utils/api';
import { AuthContext } from '../context/AuthContext';
import RegisteredDataCard from '../components/RegisteredDataCard';

function Registrations(){
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRegistrations = async () => {
      if (!user) return <Navigate to="/login" />;
      try {
        const response = await api.get('/registrations/my');
        setRegistrations(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Failed to fetch registrations');
      }
    };
    fetchRegistrations();
  }, [user]);


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold m-4">My Registrations</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {registrations.length === 0 ? (
        <p className="text-gray-600">No registrations yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {registrations.map((reg) => (
            <RegisteredDataCard key={reg._id} registration={reg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Registrations;
