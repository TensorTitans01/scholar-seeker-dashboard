
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page when accessing the root route
    navigate('/login');
  }, [navigate]);

  return null; // No UI needed as we're redirecting
};

export default Index;
