import React, { useEffect } from 'react';
import { sectionsList } from '../data/grammarData';
import { ChevronLeft, ChevronRight, X, Monitor, Sun, Moon } from 'lucide-react';

export default function PresentationMode({ 
  currentSectionId, 
  onNavigate, 
  onClose,
  renderSectionContent,
  theme,
  onToggleTheme
}) {
  const currentIndex = sectionsList.findIndex(s => s.id === currentSectionId);
  const currentSection = sectionsList[currentIndex] || sectionsList[0];

  const handleNext = () => {
    if (currentIndex < sectionsList.length - 1) {
      onNavigate(sectionsList[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(sectionsList[currentIndex - 1].id);
    }
  };

  // Keyboard Navigation: Arrow Left, Arrow Right, Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="presentation-overlay">
      {/* Top Slide Control Header */}
      <div className="presentation-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Monitor size={20} color="var(--primary-color)" />
          <div className="presentation-title">Presentation Mode</div>
          <span className="header-badge" style={{ fontSize: '0.7rem' }}>Classroom Projector View</span>
        </div>

        {/* Slide Selection Jump Dropdown & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <select 
            value={currentSectionId} 
            onChange={(e) => onNavigate(e.target.value)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            {sectionsList.map((sec, idx) => (
              <option key={sec.id} value={sec.id}>
                Slide {idx + 1}: {sec.title}
              </option>
            ))}
          </select>

          <button 
            className="btn btn-outline btn-sm"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>

          <div className="presentation-progress">
            Slide <strong>{currentIndex + 1}</strong> of {sectionsList.length}
          </div>
        </div>

        <button 
          className="btn btn-outline btn-sm"
          onClick={onClose}
          title="Exit Presentation Mode (Press Esc)"
        >
          <X size={16} /> Exit Presenter
        </button>
      </div>

      {/* Main Enlarged Slide Body */}
      <div className="presentation-body">
        {renderSectionContent(currentSectionId)}
      </div>

      {/* Bottom Presenter Footer Controls */}
      <div className="presentation-footer">
        <button 
          className="btn btn-outline"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={18} /> Previous Slide (←)
        </button>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Use <code>←</code> <code>→</code> arrow keys to navigate slides | <code>Esc</code> to exit
        </div>

        <button 
          className="btn btn-primary"
          onClick={handleNext}
          disabled={currentIndex === sectionsList.length - 1}
        >
          Next Slide (→) <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
