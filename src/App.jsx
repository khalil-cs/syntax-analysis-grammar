import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PresentationMode from './components/PresentationMode';

import HomeSection from './sections/HomeSection';
import IntroSection from './sections/IntroSection';
import GrammarSection from './sections/GrammarSection';
import DerivationSection from './sections/DerivationSection';
import ParseTreeSection from './sections/ParseTreeSection';
import ProcessSection from './sections/ProcessSection';
import ParsingTypesSection from './sections/ParsingTypesSection';
import SyntaxErrorsSection from './sections/SyntaxErrorsSection';
import SummarySection from './sections/SummarySection';
import ReferencesSection from './sections/ReferencesSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  
  // Theme state: initialized from localStorage or defaults to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'light';
  });

  // Sync theme attribute on <html> element and persist in localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Scroll to section when clicked
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to render section component based on ID
  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'home':
        return <HomeSection onNavigateToSection={scrollToSection} />;
      case 'introduction':
        return <IntroSection />;
      case 'grammar':
        return <GrammarSection />;
      case 'grammar-example':
        return <DerivationSection />;
      case 'parse-tree':
        return <ParseTreeSection />;
      case 'syntax-process':
        return <ProcessSection />;
      case 'parsing-types':
        return <ParsingTypesSection />;
      case 'syntax-errors':
        return <SyntaxErrorsSection />;
      case 'summary':
        return <SummarySection />;
      case 'references':
        return <ReferencesSection />;
      default:
        return <HomeSection onNavigateToSection={scrollToSection} />;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        onSelectSection={scrollToSection}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content Area */}
      <div className="main-wrapper">
        <Header 
          onTogglePresentation={() => setIsPresentationMode(true)}
          onPrint={handlePrint}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="content-area">
          <HomeSection onNavigateToSection={scrollToSection} />
          <IntroSection />
          <GrammarSection />
          <DerivationSection />
          <ParseTreeSection />
          <ProcessSection />
          <ParsingTypesSection />
          <SyntaxErrorsSection />
          <SummarySection />
          <ReferencesSection />
        </main>
      </div>

      {/* Presentation Mode Fullscreen Overlay */}
      {isPresentationMode && (
        <PresentationMode 
          currentSectionId={activeSection}
          onNavigate={(id) => setActiveSection(id)}
          onClose={() => setIsPresentationMode(false)}
          renderSectionContent={renderSectionContent}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}
