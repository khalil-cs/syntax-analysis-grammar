import React from 'react';
import { CheckSquare } from 'lucide-react';

export default function SummarySection() {
  return (
    <div id="summary" className="section-block">
      <div className="section-header-badge">Module 08</div>
      <h2 className="section-main-title">Summary & Key Concept Review</h2>

      <div className="card">
        <h3 className="card-title">
          <CheckSquare size={20} /> Executive Summary Bullet Points
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Syntax Analysis (Parsing):</strong> Phase 2 of compilation that checks whether token streams follow language grammar rules.
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Parser Role:</strong> Reads tokens, builds hierarchical parse tree/AST, and reports syntax errors.
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Context-Free Grammar (CFG):</strong> Formal tuple G = (V<sub>N</sub>, V<sub>T</sub>, P, S) defining valid structural syntax.
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Terminals vs Non-Terminals:</strong> Terminals are atomic token values; Non-Terminals are syntactic variables expanded by rules.
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Derivation:</strong> Step-by-step substitution of non-terminals using production rules starting from S to produce terminal string.
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Parse Tree & AST:</strong> Parse tree records full grammatical derivation; AST condenses tree to essential operators and operands.
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Top-Down vs Bottom-Up:</strong> Top-down builds root → leaves (LL); Bottom-up builds leaves → root (LR).
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <strong>• Syntax Error Recovery:</strong> Parser uses Panic-mode, Phrase-level, or Error productions to resume parsing.
          </div>
        </div>
      </div>
    </div>
  );
}
