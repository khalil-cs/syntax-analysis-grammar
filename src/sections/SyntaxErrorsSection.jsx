import React from 'react';
import { AlertTriangle, ShieldAlert, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function SyntaxErrorsSection() {
  return (
    <div id="syntax-errors" className="section-block">
      <div className="section-header-badge">Module 07</div>
      <h2 className="section-main-title">Syntax Errors & Error Recovery Strategies</h2>

      {/* 1. What is a Syntax Error */}
      <div className="card" style={{ borderLeft: '4px solid var(--error-color)' }}>
        <h3 className="card-title" style={{ color: 'var(--error-color)' }}>
          <AlertTriangle size={20} /> What is a Syntax Error?
        </h3>
        <p style={{ fontSize: '0.975rem', lineHeight: 1.65, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
          A <strong>Syntax Error</strong> occurs when the sequence of tokens produced by lexical analysis violates the formal production rules of the language's Context-Free Grammar.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <strong>Detection Mechanism:</strong> When a parser attempts to lookup its parsing action in a transition table or state machine and encounters an empty or <em>error entry</em>, a syntax error is immediately triggered.
        </p>
      </div>

      {/* 2. Syntax vs Semantic Errors */}
      <div className="card">
        <h3 className="card-title">Syntax Errors vs Semantic Errors</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Syntax Error</th>
              <th>Semantic Error</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Definition</strong></td>
              <td>Violation of grammatical structure rules.</td>
              <td>Violation of language meaning, type rules, or declarations.</td>
            </tr>
            <tr>
              <td><strong>Detection Phase</strong></td>
              <td>Syntax Analysis (Phase 2)</td>
              <td>Semantic Analysis (Phase 3)</td>
            </tr>
            <tr>
              <td><strong>Example</strong></td>
              <td><code>id + + id</code> or <code>if (x &gt; 0</code> (missing closing parenthesis)</td>
              <td><code>int x = "hello";</code> (type mismatch) or <code>y = 10;</code> (undeclared variable)</td>
            </tr>
            <tr>
              <td><strong>Structure</strong></td>
              <td>Structurally invalid.</td>
              <td>Structurally valid syntax, but logically/semantically invalid.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Error Recovery Strategies */}
      <div className="card">
        <h3 className="card-title">
          <RefreshCw size={20} /> Common Parser Error Recovery Strategies
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          When a syntax error occurs, a compiler should not crash immediately. Instead, it employs error recovery strategies to discard problematic tokens and continue parsing the remaining source code to report further errors.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary-color)', marginBottom: '0.35rem' }}>
              1. Panic-Mode Recovery
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              The parser discards incoming tokens one by one until it finds a <strong>synchronizing token</strong> (such as <code>;</code>, <code>&#125;</code>, or <code>END</code>). It then resumes parsing.
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.35rem' }}>
              2. Phrase-Level Recovery
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              The parser performs local repair on the remaining input string (e.g., automatically inserting a missing semicolon <code>;</code> or replacing a comma with a period).
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: 700, color: 'var(--success-color)', marginBottom: '0.35rem' }}>
              3. Error Productions
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              The grammar is augmented with special rules that anticipate common student/developer mistakes (e.g., <code>E → E + + T</code>) to issue tailored error warnings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
