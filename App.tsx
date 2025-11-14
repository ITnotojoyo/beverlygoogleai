import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SiteplanPage from './pages/SiteplanPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';

const routes: { [key: string]: React.FC } = {
  '/': HomePage,
  '/products': ProductsPage,
  '/siteplan': SiteplanPage,
  '/contact': ContactPage,
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial route
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const CurrentPage = routes[currentPath] || HomePage; // Fallback to HomePage

  return (
    <div className="bg-white text-gray-800 font-sans flex flex-col min-h-screen">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">
        <CurrentPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;