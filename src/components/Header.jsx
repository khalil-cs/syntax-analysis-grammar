import React from 'react';
import { Play, Printer, Menu, X, BookOpen, Sun, Moon } from 'lucide-react';

export default function Header({ 
  onTogglePresentation, 
  onPrint, 
  sidebarOpen, 
  setSidebarOpen,
  theme,
  onToggleTheme
}) {
  return (
    <header className="site-header">
      <div className="header-title-group">
        {/* Responsive Mobile Menu Button: Opens navigation drawer on mobile/tablet */}
        <button 
          className="btn btn-outline btn-sm mobile-menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation menu"
          title="Open Menu"
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          <span className="mobile-menu-text">Menu</span>
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <BookOpen size={20} color="var(--primary-color)" />
          <h1 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-color)' }}>
            Syntax Analysis & Grammar
          </h1>
        </div>
        <span className="header-badge">Compiler Construction</span>
      </div>

      <div className="header-actions">
        {/* Light / Dark Mode Toggle Button */}
        <button 
          className="btn btn-outline btn-sm"
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>

        <button 
          className="btn btn-outline btn-sm"
          onClick={onPrint}
          title="Print or export as PDF"
        >
          <Printer size={16} />
          <span>Print / PDF</span>
        </button>

        <button 
          className="btn btn-primary btn-sm"
          onClick={onTogglePresentation}
          title="Enter Presentation Mode for classroom projector"
        >
          <Play size={16} />
          <span>Presentation Mode</span>
        </button>
      </div>
    </header>
  );
}
