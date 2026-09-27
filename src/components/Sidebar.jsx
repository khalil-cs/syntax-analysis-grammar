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
  Bookmark 
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

export default function Sidebar({ activeSection, onSelectSection, sidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">CC</div>
        <div>
          <div className="sidebar-title">Syntax Analysis</div>
          <div className="sidebar-subtitle">BSCS Assignment & Demo</div>
        </div>
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
            >
              <span className="nav-item-num">{String(idx + 1).padStart(2, '0')}</span>
              <IconComponent size={16} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {sec.shortTitle}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div>Course: <strong>Compiler Construction</strong></div>
        <div style={{ marginTop: '0.2rem', opacity: 0.8 }}>Topic: Syntax Analysis & Grammar</div>
      </div>
    </aside>
  );
}
