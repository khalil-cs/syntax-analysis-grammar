import React from 'react';
import { Bookmark, BookOpen } from 'lucide-react';
import { referenceList } from '../data/grammarData';

export default function ReferencesSection() {
  return (
    <div id="references" className="section-block">
      <div className="section-header-badge">Module 09</div>
      <h2 className="section-main-title">Academic References & Literature</h2>

      <div className="card">
        <h3 className="card-title">
          <Bookmark size={20} /> Recommended Textbooks & Standard Citations
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          The theoretical concepts, grammar derivations, and parsing strategies presented in this educational software are derived from recognized computer science textbooks:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {referenceList.map((ref, idx) => (
            <div 
              key={idx} 
              style={{
                backgroundColor: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                borderLeft: '4px solid var(--primary-color)',
                padding: '1.25rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--primary-color)' }}>
                [{idx + 1}] {ref.authors} ({ref.year})
              </div>
              <div style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                {ref.title} ({ref.edition}).
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                Publisher: {ref.publisher}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginTop: '0.5rem', backgroundColor: 'var(--bg-color)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                <strong>Relevance:</strong> {ref.notes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
