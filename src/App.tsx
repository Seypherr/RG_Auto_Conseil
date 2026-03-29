import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppShell from './layout/AppShell';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';

function PageRoute({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route
          path="/"
          element={
            <PageRoute>
              <HomePage />
            </PageRoute>
          }
        />
        <Route
          path="/services"
          element={
            <PageRoute>
              <ServicesPage />
            </PageRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PageRoute>
              <AboutPage />
            </PageRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageRoute>
              <GalleryPage />
            </PageRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PageRoute>
              <ContactPage />
            </PageRoute>
          }
        />
        <Route
          path="/legal-notice"
          element={<LegalPage />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPage />}
        />
      </Route>
    </Routes>
  );
}
