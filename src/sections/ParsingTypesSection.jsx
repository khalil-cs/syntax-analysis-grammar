import React from 'react';
import { GitMerge, ArrowDown, ArrowUp } from 'lucide-react';
import { parsingTypesComparison } from '../data/grammarData';

export default function ParsingTypesSection() {
  return (
    <div id="parsing-types" className="section-block">
      <div className="section-header-badge">Module 06</div>
      <h2 className="section-main-title">Types of Parsing: Top-Down vs Bottom-Up</h2>

      {/* Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {/* Top-Down Card */}
        <div className="card" style={{ borderTop: '4px solid var(--primary-color)' }}>
          <h3 className="card-title" style={{ color: 'var(--primary-color)' }}>
            <ArrowDown size={20} /> Top-Down Parsing
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
            Top-down parsers construct the parse tree starting from the <strong>Start Symbol (S)</strong> at the root and working downwards toward the terminal leaves matching the input token stream.
          </p>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <li>Executes a <strong>Leftmost Derivation</strong>.</li>
            <li>Predicts which production rule to apply based on lookahead tokens.</li>
            <li><strong>Popular Algorithms:</strong> Recursive Descent Parsing, LL(1) Predictive Parsing.</li>
          </ul>
        </div>

        {/* Bottom-Up Card */}
        <div className="card" style={{ borderTop: '4px solid var(--accent-color)' }}>
          <h3 className="card-title" style={{ color: 'var(--accent-color)' }}>
            <ArrowUp size={20} /> Bottom-Up Parsing
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
            Bottom-up parsers construct the parse tree starting from the <strong>Terminal Leaves (Input String)</strong> and working upwards, reducing substrings to non-terminals until reaching the Start Symbol.
          </p>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <li>Executes a <strong>Reverse Rightmost Derivation</strong>.</li>
            <li>Uses Shift-Reduce operations on a parser stack.</li>
            <li><strong>Popular Algorithms:</strong> Shift-Reduce, LR(0), SLR(1), LALR(1), LR(1).</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="card">
        <h3 className="card-title">Comprehensive Comparison Matrix</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Top-Down Parsing</th>
              <th>Bottom-Up Parsing</th>
            </tr>
          </thead>
          <tbody>
            {parsingTypesComparison.map((row, idx) => (
              <tr key={idx}>
                <td><strong>{row.feature}</strong></td>
                <td style={{ color: 'var(--primary-color)' }}>{row.topDown}</td>
                <td style={{ color: 'var(--accent-color)' }}>{row.bottomUp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
