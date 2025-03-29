
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in, if not redirect to login page
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        // Redirect to appropriate dashboard based on role
        switch (user.role) {
          case 'student':
            navigate('/student-dashboard');
            break;
          case 'teacher':
            navigate('/teacher-dashboard');
            break;
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'superadmin':
            navigate('/superadmin-dashboard');
            break;
          default:
            navigate('/login');
        }
      } catch (error) {
        // If there's an error parsing the user data, redirect to login
        navigate('/login');
      }
    } else {
      // No user data found, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  return null; // No UI needed as we're redirecting
};

export default Index;
