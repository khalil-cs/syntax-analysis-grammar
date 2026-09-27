import React from 'react';
import PipelineDiagram from '../components/PipelineDiagram';
import { Cpu, CheckCircle2, XCircle } from 'lucide-react';

export default function ProcessSection() {
  return (
    <div id="syntax-process" className="section-block">
      <div className="section-header-badge">Module 05</div>
      <h2 className="section-main-title">Syntax Analysis Process & Validation</h2>

      {/* Compiler Front-End Pipeline */}
      <PipelineDiagram />

      {/* Step-by-Step Processing Flow */}
      <div className="card">
        <h3 className="card-title">
          <Cpu size={20} /> The 6 Steps of Syntax Processing
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem', marginTop: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="step-counter-badge" style={{ borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</span>
            <div>
              <strong>Token Stream Reception:</strong> The parser receives a stream of discrete token objects generated during lexical analysis (e.g., <code>&lt;id, "x"&gt; &lt;OP, "+"&gt; &lt;id, "y"&gt;</code>).
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="step-counter-badge" style={{ borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</span>
            <div>
              <strong>Grammar Rule Lookup:</strong> The parser consults the formal Context-Free Grammar rules stored in parsing tables or hardcoded recursive functions.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="step-counter-badge" style={{ borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</span>
            <div>
              <strong>Production Matching:</strong> Production rules are matched and applied according to the chosen strategy (Top-Down expansion or Bottom-Up reduction).
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="step-counter-badge" style={{ borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</span>
            <div>
              <strong>Derivation Verification:</strong> The parser checks whether the entire input token stream can be derived cleanly from the start symbol <code>S</code>.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="step-counter-badge" style={{ borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</span>
            <div>
              <strong>Tree Construction (Valid Input):</strong> If the sequence is valid, an Abstract Syntax Tree (AST) or intermediate representation is constructed for subsequent semantic analysis.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="step-counter-badge" style={{ borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>6</span>
            <div>
              <strong>Error Reporting (Invalid Input):</strong> If an unexpected token breaks grammatical derivations, a syntax error is reported and error recovery mechanisms are invoked.
            </div>
          </div>
        </div>
      </div>

      {/* Rigorous Academic Examples */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <div className="card" style={{ borderTop: '4px solid var(--success-color)' }}>
          <h4 className="card-title" style={{ color: 'var(--success-color)' }}>
            <CheckCircle2 size={18} /> Valid Example: "id + id"
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
            <strong>Analysis:</strong> The input contains token sequence <code>id</code>, <code>+</code>, <code>id</code>.
            <br />
            <strong>Grammar Verification:</strong>
            <br />
            1. Rule <code>E → E + T</code> expands expression.
            <br />
            2. Left <code>E → T → id</code> matches first identifier.
            <br />
            3. Operator <code>+</code> matches terminal operator.
            <br />
            4. Right <code>T → id</code> matches second identifier.
            <br />
            <span style={{ color: 'var(--success-color)', fontWeight: 600 }}>Result: Entire token stream consumed with zero remaining non-terminals.</span>
          </p>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--error-color)' }}>
          <h4 className="card-title" style={{ color: 'var(--error-color)' }}>
            <XCircle size={18} /> Invalid Example: "id + + id"
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
            <strong>Analysis:</strong> The input contains sequence <code>id</code>, <code>+</code>, <code>+</code>, <code>id</code>.
            <br />
            <strong>Grammar Violation:</strong>
            <br />
            1. Parser consumes first <code>id +</code>.
            <br />
            2. Production <code>E → E + T</code> strictly mandates that token following <code>+</code> must derive a Term <code>T</code> (which derives an operand like <code>id</code>).
            <br />
            3. Receiving a second <code>+</code> operator fails all production rules in set <code>P</code>.
            <br />
            <span style={{ color: 'var(--error-color)', fontWeight: 600 }}>Result: Syntax Error triggered at token 3 ("+").</span>
          </p>
        </div>
      </div>
    </div>
  );
}
