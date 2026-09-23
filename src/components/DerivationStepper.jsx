import React, { useState } from 'react';
import { derivationSteps, grammarRules } from '../data/grammarData';
import { ChevronLeft, ChevronRight, RotateCcw, HelpCircle } from 'lucide-react';

export default function DerivationStepper() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const totalSteps = derivationSteps.length;
  const currentStep = derivationSteps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="derivation-container">
      <div className="derivation-controls">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            className="btn btn-outline btn-sm"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            title="Previous derivation step"
          >
            <ChevronLeft size={16} /> Previous Step
          </button>
          
          <button 
            className="btn btn-outline btn-sm"
            onClick={handleNext}
            disabled={currentStepIndex === totalSteps - 1}
            title="Next derivation step"
          >
            Next Step <ChevronRight size={16} />
          </button>
        </div>

        <div className="step-counter-badge">
          Step {currentStepIndex + 1} of {totalSteps}
        </div>

        <button 
          className="btn btn-outline btn-sm"
          onClick={handleReset}
          title="Reset to step 1"
        >
          <RotateCcw size={15} /> Reset
        </button>
      </div>

      {/* Step Direct Jump Buttons */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', justifyContent: 'center' }}>
        {derivationSteps.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => setCurrentStepIndex(idx)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: idx === currentStepIndex ? 'var(--primary-color)' : 'var(--bg-color)',
              color: idx === currentStepIndex ? 'white' : 'var(--text-main)',
              fontSize: '0.825rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            Step {s.step}
          </button>
        ))}
      </div>

      {/* Expression Box */}
      <div className="expression-box">
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>
          Current Sentential Form
        </div>

        <div className="expression-tokens">
          {currentStep.current.map((tok, idx) => {
            const isTerminal = tok === 'id' || tok === '+';
            const isReplacedInThisStep = idx === currentStep.replacedIndex;

            return (
              <span
                key={idx}
                className={`token-badge ${isTerminal ? 'token-terminal' : 'token-nonterminal'} ${isReplacedInThisStep ? 'token-highlighted' : ''}`}
                title={isTerminal ? 'Terminal Symbol' : 'Non-Terminal Symbol'}
              >
                {tok}
              </span>
            );
          })}
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Target Token Sequence: <code style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-color)' }}>id + id</code>
        </div>
      </div>

      {/* Active Rule & Step Explanation */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem' }}>
        <div className="rule-highlight-box">
          <div style={{ fontSize: '0.775rem', color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            Applied Production Rule
          </div>
          <div className="rule-code">
            {currentStep.appliedRule}
          </div>
          <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {currentStep.ruleUsed}
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-color)' }}>
          <div style={{ fontSize: '0.775rem', color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <HelpCircle size={14} /> Step Breakdown
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
            {currentStep.explanation}
          </div>
        </div>
      </div>

      {/* Grammar Rules Reference */}
      <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          Reference Grammar Rules:
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {grammarRules.map((rule) => {
            const isActiveRule = currentStep.appliedRule === rule.rule;
            return (
              <div 
                key={rule.id}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: isActiveRule ? '2px solid var(--accent-color)' : '1px solid var(--border-color)',
                  backgroundColor: isActiveRule ? 'var(--accent-light)' : 'var(--surface-color)',
                  fontSize: '0.825rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <strong style={{ color: isActiveRule ? 'var(--accent-color)' : 'var(--primary-color)' }}>Rule {rule.id}:</strong> {rule.rule}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
