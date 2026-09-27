import React from 'react';
import { Layers, HelpCircle, Code, ArrowRight } from 'lucide-react';
import { symbolsDefinition, grammarRules } from '../data/grammarData';

export default function GrammarSection() {
  return (
    <div id="grammar" className="section-block">
      <div className="section-header-badge">Module 02</div>
      <h2 className="section-main-title">Grammar & Context-Free Grammar (CFG)</h2>

      {/* 1. What is a Formal Grammar */}
      <div className="card">
        <h3 className="card-title">
          <Layers size={20} /> What is a Formal Grammar?
        </h3>
        <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--text-main)', marginBottom: '1rem' }}>
          A <strong>Grammar</strong> is a mathematical model that defines the formal syntax of a programming language. It consists of a precise set of structural rules specifying how valid strings of tokens can be formed.
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          In compiler construction, we use <strong>Context-Free Grammars (CFG)</strong> (Type-2 in Chomsky hierarchy) because they provide sufficient expressive power to specify nested block structures, arithmetic expressions, and control statements while enabling efficient parsing algorithms.
        </p>
      </div>

      {/* 2. Four Components of a Context-Free Grammar: G = (V_N, V_T, P, S) */}
      <div className="card">
        <h3 className="card-title">The 4 Core Components of a CFG: G = (V<sub>N</sub>, V<sub>T</sub>, P, S)</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: 'var(--primary-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid #c0d3e5' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary-color)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              1. Non-Terminals (V<sub>N</sub>)
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              Syntactic variables that represent structural concepts (e.g., <code>E</code>, <code>T</code>). They are expanded using production rules.
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--accent-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid #ebd4c2' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent-color)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              2. Terminals (V<sub>T</sub>)
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              The basic elementary symbols or tokens of the language (e.g., <code>id</code>, <code>+</code>). They cannot be expanded further.
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              3. Production Rules (P)
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Rules of the form <code>A → α</code>, where non-terminal <code>A</code> is replaced by symbol sequence <code>α</code>.
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--success-light)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid #b8e0c8' }}>
            <div style={{ fontWeight: 700, color: 'var(--success-color)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              4. Start Symbol (S)
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              The distinguished non-terminal symbol from which all grammatical derivations begin (e.g., <code>E</code>).
            </div>
          </div>
        </div>
      </div>

      {/* 3. Assigned Sample Grammar Breakdown */}
      <div className="card" style={{ borderTop: '4px solid var(--primary-color)' }}>
        <h3 className="card-title">Selected University Assignment Grammar</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          We will analyze the standard arithmetic expression grammar used throughout this assignment:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.5rem', alignItems: 'start' }}>
          {/* Rules List */}
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>
              Production Rules Set (P)
            </div>
            {grammarRules.map(r => (
              <div 
                key={r.id} 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  backgroundColor: 'var(--surface-color)',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '0.5rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Rule {r.id}: {r.rule}</span>
              </div>
            ))}
          </div>

          {/* Symbol Legend */}
          <div>
            <div style={{ fontWeight: 700, color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>
              Symbol Specification
            </div>
            <table className="academic-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Category</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                {symbolsDefinition.map((sym, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary-color)' }}>{sym.symbol}</td>
                    <td>
                      <span className={`token-badge ${sym.type === 'Terminal' ? 'token-terminal' : 'token-nonterminal'}`}>
                        {sym.type}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.875rem' }}>{sym.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
