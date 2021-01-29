import { useContext, useState } from 'react';

import AuthContext from './context';
import { register } from '../api/auth';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (email, password) => {
    setLoading(true);
    
    const result = await register(email, password);
    if (!result.error && result.user) {
      setUser(result.user);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  }

  return { error, setError, signup, user, loading };
};