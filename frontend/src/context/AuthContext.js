import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Logger from '../utils/logger';

const AuthContext = createContext(null);

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const updateProfile = async (updates) => {
    const { data, error } = await supabase.auth.updateUser({ data: updates });
    if (error) throw error;
    setUser(data.user);
  };

  const deleteAccount = async () => {
    // For now, we'll just logout the user since Supabase client API doesn't allow user deletion
    // In a real implementation, you'd call your backend API to schedule deletion
    Logger.info('Account deletion scheduled');
    await logout();
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      Logger.debug('Auth state change event:', event, 'Session:', session);
      if (session) {
        setUser(session.user);
        setToken(session.access_token);
        localStorage.setItem('jwtToken', session.access_token);
      } else {
        setUser(null);
        setToken(null);
        localStorage.removeItem('jwtToken');
      }
      setLoading(false);
    });

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
        setToken(session.access_token);
        localStorage.setItem('jwtToken', session.access_token);
      } else {
        setUser(null);
        setToken(null);
        localStorage.removeItem('jwtToken');
      }
      setLoading(false);
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    
    try {
      // Use our backend login endpoint instead of direct Supabase
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
      const response = await fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
      
      
      
      // Supabase's onAuthStateChange will handle setting user, token, and localStorage
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    
    try {
      // Call backend logout endpoint
      const currentToken = localStorage.getItem('jwtToken');
      if (currentToken) {
        try {
          const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
          await fetch(`${apiUrl}/api/logout`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${currentToken}`,
              'Content-Type': 'application/json'
            }
          });
        } catch (backendError) {
          Logger.warn('Backend logout failed:', backendError.message);
          // Continue with local cleanup even if backend fails
        }
      }

      // Supabase logout (client-side)
      const { error: supabaseSignOutError } = await supabase.auth.signOut();
      if (supabaseSignOutError) {
        Logger.warn('Supabase client-side logout failed:', supabaseSignOutError.message);
      }

    } catch (error) {
      Logger.warn('Logout process encountered issues:', error.message);
    } finally {
      // Always perform local cleanup
      setUser(null);
      setToken(null);
      localStorage.removeItem('jwtToken');
      setLoading(false);
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, updateProfile, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);