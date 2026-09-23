import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function HomeSection({ onNavigateToSection }) {
  return (
    <div id="home" className="section-block">
      <div className="section-header-badge">University Assignment & Presentation</div>
      <h2 className="section-main-title">Syntax Analysis & Grammar</h2>

      {/* Overview Intro Card */}
      <div className="card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
        <h3 className="card-title">
          <BookOpen size={20} /> Project Overview
        </h3>
        <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          This application explains syntax analysis, grammar, derivation, parse trees, parsing approaches, and syntax errors through interactive examples.
        </p>
      </div>

      {/* Permanent Student Information & Submission Details Card */}
      <div className="student-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
          <GraduationCap size={22} /> Student Information & Submission Details
        </div>

        <div className="student-grid">
          <div className="student-field">
            <label>Student Name</label>
            <div className="student-val student-val-primary">Khalil Ullah</div>
          </div>

          <div className="student-field">
            <label>Roll Number</label>
            <div className="student-val">2662</div>
          </div>

          <div className="student-field">
            <label>Course</label>
            <div className="student-val">Compiler Construction</div>
          </div>

          <div className="student-field">
            <label>Semester</label>
            <div className="student-val">6th</div>
          </div>

          <div className="student-field" style={{ gridColumn: 'span 2' }}>
            <label>Instructor Name</label>
            <div className="student-val student-val-accent">Prof: Shah Muhammad Sab</div>
          </div>

          <div className="student-field" style={{ gridColumn: 'span 2' }}>
            <label>Assignment Topic</label>
            <div className="student-val">Syntax Analysis & Grammar</div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Modules Grid */}
      <div className="card" style={{ marginTop: '1.75rem' }}>
        <h3 className="card-title">Core Educational Modules</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Navigate through the assignment modules using the buttons below or the sidebar menu:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.85rem' }}>
          <button 
            className="btn btn-outline" 
            style={{ justifyContent: 'flex-start', padding: '0.85rem' }}
            onClick={() => onNavigateToSection('introduction')}
          >
            <strong>1. Introduction</strong>
          </button>
          <button 
            className="btn btn-outline" 
            style={{ justifyContent: 'flex-start', padding: '0.85rem' }}
            onClick={() => onNavigateToSection('grammar')}
          >
            <strong>2. Grammar & CFG</strong>
          </button>
          <button 
            className="btn btn-outline" 
            style={{ justifyContent: 'flex-start', padding: '0.85rem' }}
            onClick={() => onNavigateToSection('grammar-example')}
          >
            <strong>3. Interactive Derivation</strong>
          </button>
          <button 
            className="btn btn-outline" 
            style={{ justifyContent: 'flex-start', padding: '0.85rem' }}
            onClick={() => onNavigateToSection('parse-tree')}
          >
            <strong>4. Parse Tree & AST</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
