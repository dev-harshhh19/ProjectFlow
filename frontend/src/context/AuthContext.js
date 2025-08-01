import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

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
    console.log('Account deletion scheduled');
    await logout();
  };

  useEffect(() => {
    // Check for existing session token in localStorage on mount
    const existingToken = localStorage.getItem('jwtToken');
    if (existingToken) {
      // Validate the session token with our backend
      fetch('http://localhost:4000/api/projects', {
        headers: {
          'Authorization': `Bearer ${existingToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Token is valid, keep the session
          setToken(existingToken);
          // We'll need to get user info somehow - for now set a basic user object
          // In a real app, you might have a /api/user endpoint to get current user info
          setUser({ email: 'authenticated' }); // Placeholder - you might want to improve this
        } else {
          // Token is invalid, clear it
          localStorage.removeItem('jwtToken');
          setUser(null);
          setToken(null);
        }
        setLoading(false);
      })
      .catch(error => {
        console.warn('Session validation failed:', error.message);
        localStorage.removeItem('jwtToken');
        setUser(null);
        setToken(null);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    
    try {
      // Use our backend login endpoint instead of direct Supabase
      const response = await fetch('http://localhost:4000/api/login', {
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
      
      const data = await response.json();
      
      // Add session_token to user object for easy access
      const userWithToken = { ...data.user, session_token: data.session_token };
      setUser(userWithToken);
      setToken(data.session_token); // Use our lightweight session token
      localStorage.setItem('jwtToken', data.session_token);
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
      // Try to call our backend logout endpoint first
      const currentToken = localStorage.getItem('jwtToken');
      if (currentToken) {
        try {
          await fetch('http://localhost:4000/api/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${currentToken}`,
              'Content-Type': 'application/json'
            }
          });
        } catch (backendError) {
          console.warn('Backend logout failed:', backendError.message);
          // Continue with local cleanup even if backend fails
        }
      }

      // Try Supabase logout, but don't fail if it has network issues
      try {
        await supabase.auth.signOut();
      } catch (supabaseError) {
        console.warn('Supabase logout failed:', supabaseError.message);
        // Continue with local cleanup even if Supabase fails
      }
    } catch (error) {
      console.warn('Logout process encountered issues:', error.message);
      // Continue with local cleanup regardless of errors
    }
    
    // Always perform local cleanup
    setUser(null);
    setToken(null);
    localStorage.removeItem('jwtToken');
    setLoading(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, updateProfile, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);