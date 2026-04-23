import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Features = lazy(() => import('../pages/Features/Features'));
const Security = lazy(() => import('../pages/Security/Security'));
const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Login = lazy(() => import('../pages/Login/Login'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="ab-route-fallback" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
