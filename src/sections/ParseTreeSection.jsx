import React from 'react';
import ParseTreeDiagram from '../components/ParseTreeDiagram';
import { Network, GitCommit, Info } from 'lucide-react';

export default function ParseTreeSection() {
  return (
    <div id="parse-tree" className="section-block">
      <div className="section-header-badge">Module 04</div>
      <h2 className="section-main-title">Parse Tree Representation & AST Comparison</h2>

      {/* 1. What is a Parse Tree */}
      <div className="card">
        <h3 className="card-title">
          <Network size={20} /> Concrete Parse Tree Representation
        </h3>
        <p style={{ fontSize: '0.975rem', lineHeight: 1.65, color: 'var(--text-main)', marginBottom: '1rem' }}>
          A <strong>Parse Tree</strong> (or Concrete Syntax Tree) is a graphical tree representation that shows how a start symbol derives a string of terminals according to the production rules of a Context-Free Grammar.
        </p>

        {/* CSS Rendered Parse Tree & AST Tabs */}
        <ParseTreeDiagram />
      </div>

      {/* 2. Structural Elements Breakdown */}
      <div className="card">
        <h3 className="card-title">Anatomy of a Parse Tree</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary-color)', marginBottom: '0.35rem' }}>1. Root Node</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Always labeled with the grammar's <strong>Start Symbol</strong> (<code>E</code> in our example).
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary-color)', marginBottom: '0.35rem' }}>2. Internal Nodes</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Always labeled with <strong>Non-Terminals</strong> (<code>E</code>, <code>T</code>). Each internal node represents a production rule application.
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.35rem' }}>3. Leaf Nodes</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Always labeled with <strong>Terminals</strong> (<code>id</code>, <code>+</code>) or epsilon (ε).
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--success-color)', marginBottom: '0.35rem' }}>4. Leaf Yield</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Reading leaf nodes from left to right yields the original token sequence <code>id + id</code>.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Academic Nuance Note */}
      <div className="academic-callout">
        <div className="academic-callout-title">
          <Info size={16} style={{ display: 'inline', marginRight: '0.35rem' }} />
          Academic Precision Note
        </div>
        While parse trees illustrate the formal grammatical derivation of a program, production compilers rarely store full concrete parse trees in memory due to overhead. Instead, practical parsers directly construct an <strong>Abstract Syntax Tree (AST)</strong> or execute syntax-directed translation actions on-the-fly.
      </div>
    </div>
  );
}
