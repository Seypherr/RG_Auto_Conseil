import { Route, Routes } from 'react-router-dom';
import AppShell from './layout/AppShell';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<ServicesPage />} path="/services" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<GalleryPage />} path="/gallery" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<LegalPage />} path="/legal-notice" />
        <Route element={<PrivacyPage />} path="/privacy-policy" />
      </Route>
    </Routes>
  );
}
