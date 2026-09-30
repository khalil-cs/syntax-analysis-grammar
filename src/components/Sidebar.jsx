import React from 'react';
import { sectionsList } from '../data/grammarData';
import { 
  Home, 
  BookOpen, 
  Layers, 
  GitBranch, 
  Network, 
  Cpu, 
  GitMerge, 
  AlertTriangle, 
  CheckSquare, 
  Bookmark,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const sectionIcons = {
  'home': Home,
  'introduction': BookOpen,
  'grammar': Layers,
  'grammar-example': GitBranch,
  'parse-tree': Network,
  'syntax-process': Cpu,
  'parsing-types': GitMerge,
  'syntax-errors': AlertTriangle,
  'summary': CheckSquare,
  'references': Bookmark
};

export default function Sidebar({ 
  activeSection, 
  onSelectSection, 
  sidebarOpen, 
  sidebarCollapsed, 
  onToggleCollapse,
  onCloseMobile 
}) {
  return (
    // Toggles 'open' for mobile drawer overlay & 'collapsed' for compact desktop rail view
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">CC</div>
        
        {/* Hides title group when desktop sidebar is collapsed */}
        {!sidebarCollapsed && (
          <div className="sidebar-title-group">
            <div className="sidebar-title">Syntax Analysis</div>
            <div className="sidebar-subtitle">BSCS Assignment & Demo</div>
          </div>
        )}

        {/* Desktop Collapse/Expand Toggle Button */}
        <button 
          className="sidebar-collapse-btn desktop-only"
          onClick={onToggleCollapse}
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        {/* Mobile Drawer Close Button */}
        <button 
          className="sidebar-close-btn mobile-only"
          onClick={onCloseMobile}
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {sectionsList.map((sec, idx) => {
          const IconComponent = sectionIcons[sec.id] || BookOpen;
          const isActive = activeSection === sec.id;

          return (
            <button
              key={sec.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectSection(sec.id)}
              title={sidebarCollapsed ? sec.shortTitle : undefined}
            >
              <span className="nav-item-num">{String(idx + 1).padStart(2, '0')}</span>
              <IconComponent size={18} style={{ flexShrink: 0 }} />
              
              {/* Hides text labels when desktop sidebar is collapsed */}
              {!sidebarCollapsed && (
                <span className="nav-item-text">
                  {sec.shortTitle}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Hides footer info when desktop sidebar is collapsed */}
      {!sidebarCollapsed && (
        <div className="sidebar-footer">
          <div>Course: <strong>Compiler Construction</strong></div>
          <div style={{ marginTop: '0.2rem', opacity: 0.8 }}>Topic: Syntax Analysis & Grammar</div>
        </div>
      )}
    </aside>
  );
}
