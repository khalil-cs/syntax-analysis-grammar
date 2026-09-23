import React from 'react';
import DerivationStepper from '../components/DerivationStepper';
import { GitBranch, Info } from 'lucide-react';

export default function DerivationSection() {
  return (
    <div id="grammar-example" className="section-block">
      <div className="section-header-badge">Module 03 — Interactive Module</div>
      <h2 className="section-main-title">Interactive Grammar Derivation Example</h2>

      <div className="card">
        <h3 className="card-title">
          <GitBranch size={20} /> Leftmost Derivation of Target Input: "id + id"
        </h3>
        <p style={{ fontSize: '0.975rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
          A <strong>derivation</strong> is a sequence of grammar rule applications starting from the start symbol <code>E</code> and systematically replacing non-terminals until only terminal tokens remain. Below, experience the step-by-step derivation for <code>id + id</code>:
        </p>

        {/* Interactive Derivation Stepper Widget */}
        <DerivationStepper />
      </div>

      <div className="academic-callout">
        <div className="academic-callout-title">
          <Info size={16} style={{ display: 'inline', marginRight: '0.35rem' }} />
          Presentation Demonstration Tip
        </div>
        During your classroom presentation, click <strong>"Next Step →"</strong> or use <strong>"Auto Play"</strong> to walk your instructor and classmates through how the non-terminal <code>E</code> expands into expression <code>E + T</code> and ultimately yields the target token stream <code>id + id</code>.
      </div>
    </div>
  );
}
