import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';
import Landing from './components/Landing';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import UserAgreement from './components/UserAgreement';
import Support from './components/Support';
import Features from './components/Features';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Feedback from './components/Feedback';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';

// Inner component that uses auth context
function AppContent() {
  const { login } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      login(token);
      // Clear the token from the URL
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location, login]);

  return (
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="landing"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Landing />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/login"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Login />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/register"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="register"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Register />
                </motion.div>
              </AnimatePresence>
            }
          />
          
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AnimatePresence mode="wait">
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Dashboard />
                  </motion.div>
                </AnimatePresence>
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProtectedRoute>
                <AnimatePresence mode="wait">
                  <motion.div
                    key="project-details"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <ProjectDetails />
                  </motion.div>
                </AnimatePresence>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AnimatePresence mode="wait">
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Profile />
                  </motion.div>
                </AnimatePresence>
              </ProtectedRoute>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="privacy-policy"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <PrivacyPolicy />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="terms-of-service"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <TermsOfService />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/cookie-policy"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="cookie-policy"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <CookiePolicy />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/user-agreement"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="user-agreement"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <UserAgreement />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/support"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="support"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Support />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/features"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Features />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/feedback"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Feedback />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <Support />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
