import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Code, Cpu, Layers } from 'lucide-react';

export default function PipelineDiagram() {
  const [selectedExample, setSelectedExample] = useState('valid'); // 'valid' | 'invalid'

  return (
    <div style={{ margin: '1.5rem 0' }}>
      {/* Visual Flow Diagram */}
      <div className="card" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h4 className="card-title" style={{ marginBottom: '1.25rem' }}>
          <Cpu size={18} /> Front-End Compiler Execution Pipeline
        </h4>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          overflowX: 'auto',
          padding: '1rem 0.5rem'
        }}>
          {/* Stage 1: Source Code */}
          <div style={{
            backgroundColor: 'var(--bg-color)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            textAlign: 'center',
            minWidth: '130px'
          }}>
            <Code size={20} color="#5F6875" style={{ marginBottom: '0.25rem' }} />
            <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Source Code</div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>e.g., x + y</div>
          </div>

          <ArrowRight size={18} color="#5B7FA3" />

          {/* Stage 2: Lexical Analysis */}
          <div style={{
            backgroundColor: 'var(--bg-color)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            textAlign: 'center',
            minWidth: '140px'
          }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-color)' }}>Lexical Analysis</div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Scanner / Lexer</div>
          </div>

          <ArrowRight size={18} color="#5B7FA3" />

          {/* Stage 3: Tokens */}
          <div style={{
            backgroundColor: 'var(--bg-color)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            textAlign: 'center',
            minWidth: '130px'
          }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Token Stream</div>
            <div style={{ fontSize: '0.725rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>id, +, id</div>
          </div>

          <ArrowRight size={18} color="#5B7FA3" />

          {/* Stage 4: Syntax Analysis (HIGHLIGHTED) */}
          <div style={{
            backgroundColor: 'var(--primary-light)',
            border: '2px solid var(--primary-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1.1rem',
            textAlign: 'center',
            minWidth: '160px',
            boxShadow: 'var(--shadow-card)'
          }}>
            <Layers size={22} color="#315C8C" style={{ marginBottom: '0.25rem' }} />
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-color)' }}>Syntax Analysis</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-dark)' }}>Parser + CFG Rules</div>
          </div>

          <ArrowRight size={18} color="#5B7FA3" />

          {/* Stage 5: Parse Tree / AST */}
          <div style={{
            backgroundColor: 'var(--success-light)',
            border: '1px solid var(--success-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            textAlign: 'center',
            minWidth: '140px'
          }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--success-color)' }}>Parse Tree / AST</div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Syntactic Structure</div>
          </div>
        </div>
      </div>

      {/* Interactive Valid vs Invalid Expression Syntax Tester */}
      <div className="card">
        <h4 className="card-title">Interactive Syntax Validator Demonstration</h4>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <button
            className={`btn ${selectedExample === 'valid' ? 'btn-primary' : 'btn-outline'} btn-sm`}
            onClick={() => setSelectedExample('valid')}
          >
            <CheckCircle2 size={16} /> Valid Token Sequence: "id + id"
          </button>

          <button
            className={`btn ${selectedExample === 'invalid' ? 'btn-primary' : 'btn-outline'} btn-sm`}
            onClick={() => setSelectedExample('invalid')}
          >
            <XCircle size={16} /> Invalid Token Sequence: "id + + id"
          </button>
        </div>

        {selectedExample === 'valid' ? (
          <div style={{ backgroundColor: 'var(--success-light)', border: '1px solid var(--success-color)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success-color)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={20} /> SYNTAX VALID: Expression Accepted
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              The sequence <code>id + id</code> matches the formal grammar derivation rules:
              <br />
              <code>E → E + T → T + T → id + T → id + id</code>.
              <br />
              All non-terminals derive valid terminals, leaving no dangling operators or unexpanded non-terminals.
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'var(--error-light)', border: '1px solid var(--error-color)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--error-color)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
              <XCircle size={20} /> SYNTAX ERROR DETECTED: Parsing Failed
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              The sequence <code>id + + id</code> triggers a syntax error at the second <code>+</code> token (position 3).
              <br />
              <strong>Grammar Violation Reason:</strong> In grammar rule <code>E → E + T</code>, after reading the plus operator (<code>+</code>), the parser expects a Term (<code>T</code>) which expands to an identifier (<code>id</code>). Encountering another <code>+</code> operator violates the CFG rule as binary operator <code>+</code> requires two operands, not another consecutive operator.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
