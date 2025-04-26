import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AssessmentPage from './pages/AssessmentPage';
import GuidesPage from './pages/GuidesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple client-side routing
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'assessment':
        return <AssessmentPage />;
      case 'guides':
        return <GuidesPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  // In a real app, we would use a proper router
  // This is a simplified version for demo purposes
  window.onpopstate = () => {
    const path = window.location.pathname;
    if (path.includes('assessment')) {
      setCurrentPage('assessment');
    } else if (path.includes('guides')) {
      setCurrentPage('guides');
    } else if (path.includes('resources')) {
      setCurrentPage('resources');
    } else if (path.includes('about')) {
      setCurrentPage('about');
    } else {
      setCurrentPage('home');
    }
  };

  // Override the Link component's navigation
  if (typeof window !== 'undefined') {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest('a');
      
      if (closestLink && closestLink.getAttribute('href')) {
        const href = closestLink.getAttribute('href') as string;
        
        if (href === '/assessment') {
          e.preventDefault();
          setCurrentPage('assessment');
          window.history.pushState({}, '', href);
        } else if (href === '/guides') {
          e.preventDefault();
          setCurrentPage('guides');
          window.history.pushState({}, '', href);
        } else if (href === '/resources') {
          e.preventDefault();
          setCurrentPage('resources');
          window.history.pushState({}, '', href);
        } else if (href === '/about') {
          e.preventDefault();
          setCurrentPage('about');
          window.history.pushState({}, '', href);
        } else if (href === '/') {
          e.preventDefault();
          setCurrentPage('home');
          window.history.pushState({}, '', href);
        }
      }
    });
  }

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;