import React, { useState } from 'react';
import { Layers, Network, GitCommit, Check } from 'lucide-react';

export default function ParseTreeDiagram() {
  const [activeTab, setActiveTab] = useState('parse-tree'); // 'parse-tree' | 'ast' | 'comparison'
  const [selectedNodeType, setSelectedNodeType] = useState('all'); // 'all' | 'root' | 'nonterminal' | 'terminal'

  return (
    <div style={{ margin: '1.5rem 0' }}>
      {/* View Switcher Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          className={`btn ${activeTab === 'parse-tree' ? 'btn-primary' : 'btn-outline'} btn-sm`}
          onClick={() => setActiveTab('parse-tree')}
        >
          <Network size={16} /> Parse Tree (Full Derivation)
        </button>

        <button
          className={`btn ${activeTab === 'ast' ? 'btn-primary' : 'btn-outline'} btn-sm`}
          onClick={() => setActiveTab('ast')}
        >
          <GitCommit size={16} /> Abstract Syntax Tree (AST)
        </button>

        <button
          className={`btn ${activeTab === 'comparison' ? 'btn-primary' : 'btn-outline'} btn-sm`}
          onClick={() => setActiveTab('comparison')}
        >
          <Layers size={16} /> Side-by-Side Comparison
        </button>
      </div>

      {/* Filter Selector for Parse Tree */}
      {activeTab === 'parse-tree' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Highlight Node Type:</span>
          <button 
            className={`btn btn-sm ${selectedNodeType === 'all' ? 'btn-accent' : 'btn-outline'}`}
            onClick={() => setSelectedNodeType('all')}
          >
            All Nodes
          </button>
          <button 
            className={`btn btn-sm ${selectedNodeType === 'root' ? 'btn-accent' : 'btn-outline'}`}
            onClick={() => setSelectedNodeType('root')}
          >
            Root (E)
          </button>
          <button 
            className={`btn btn-sm ${selectedNodeType === 'nonterminal' ? 'btn-accent' : 'btn-outline'}`}
            onClick={() => setSelectedNodeType('nonterminal')}
          >
            Non-Terminals (E, T)
          </button>
          <button 
            className={`btn btn-sm ${selectedNodeType === 'terminal' ? 'btn-accent' : 'btn-outline'}`}
            onClick={() => setSelectedNodeType('terminal')}
          >
            Leaves / Terminals (id, +)
          </button>
        </div>
      )}

      {/* Full Concrete Parse Tree View */}
      {activeTab === 'parse-tree' && (
        <div className="parse-tree-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>
              Concrete Parse Tree for Expression: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-color)' }}>id + id</code>
            </span>
          </div>

          <div className="tree-container" style={{ position: 'relative', padding: '1rem 0' }}>
            {/* Level 0: Root Node E */}
            <div className="tree-node" style={{ marginBottom: '2.5rem' }}>
              <div 
                className="node-content node-nonterminal"
                style={{
                  opacity: selectedNodeType === 'terminal' ? 0.35 : 1,
                  border: (selectedNodeType === 'root' || selectedNodeType === 'nonterminal') ? '3px solid var(--accent-color)' : ''
                }}
                title="Root Node: Start Symbol E"
              >
                E
              </div>

              {/* Connecting lines from E to Children (E, +, T) */}
              <div style={{
                display: 'flex',
                gap: '5rem',
                marginTop: '2.5rem',
                position: 'relative'
              }}>
                {/* Branch 1: Left Subtree E */}
                <div className="tree-node">
                  <div 
                    className="node-content node-nonterminal"
                    style={{
                      opacity: (selectedNodeType === 'terminal' || selectedNodeType === 'root') ? 0.35 : 1,
                      border: selectedNodeType === 'nonterminal' ? '3px solid var(--accent-color)' : ''
                    }}
                    title="Internal Non-Terminal Node: E"
                  >
                    E
                  </div>
                  
                  {/* Branch to T */}
                  <div style={{ marginTop: '2.25rem' }}>
                    <div className="tree-node">
                      <div 
                        className="node-content node-nonterminal"
                        style={{
                          opacity: (selectedNodeType === 'terminal' || selectedNodeType === 'root') ? 0.35 : 1,
                          border: selectedNodeType === 'nonterminal' ? '3px solid var(--accent-color)' : ''
                        }}
                        title="Internal Non-Terminal Node: T"
                      >
                        T
                      </div>
                      
                      {/* Branch to id */}
                      <div style={{ marginTop: '2.25rem' }}>
                        <div 
                          className="node-content node-terminal"
                          style={{
                            opacity: (selectedNodeType === 'nonterminal' || selectedNodeType === 'root') ? 0.35 : 1,
                            border: selectedNodeType === 'terminal' ? '3px solid black' : ''
                          }}
                          title="Leaf Node: Terminal Symbol id"
                        >
                          id
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch 2: Middle Terminal + */}
                <div className="tree-node">
                  <div 
                    className="node-content node-terminal"
                    style={{
                      opacity: (selectedNodeType === 'nonterminal' || selectedNodeType === 'root') ? 0.35 : 1,
                      border: selectedNodeType === 'terminal' ? '3px solid black' : ''
                    }}
                    title="Leaf Node: Terminal Operator +"
                  >
                    +
                  </div>
                </div>

                {/* Branch 3: Right Subtree T */}
                <div className="tree-node">
                  <div 
                    className="node-content node-nonterminal"
                    style={{
                      opacity: (selectedNodeType === 'terminal' || selectedNodeType === 'root') ? 0.35 : 1,
                      border: selectedNodeType === 'nonterminal' ? '3px solid var(--accent-color)' : ''
                    }}
                    title="Internal Non-Terminal Node: T"
                  >
                    T
                  </div>

                  {/* Branch to id */}
                  <div style={{ marginTop: '2.25rem' }}>
                    <div 
                      className="node-content node-terminal"
                      style={{
                        opacity: (selectedNodeType === 'nonterminal' || selectedNodeType === 'root') ? 0.35 : 1,
                        border: selectedNodeType === 'terminal' ? '3px solid black' : ''
                      }}
                      title="Leaf Node: Terminal Symbol id"
                    >
                      id
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tree Leaf Yield Banner */}
            <div style={{
              marginTop: '1rem',
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent-color)',
              padding: '0.65rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-color)' }}>
                Leaf Yield (Left-to-Right Read):
              </span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '2px' }}>
                <span style={{ color: 'var(--accent-color)' }}>id</span> + <span style={{ color: 'var(--accent-color)' }}>id</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AST View */}
      {activeTab === 'ast' && (
        <div className="parse-tree-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>
              Abstract Syntax Tree (AST) for Expression: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-color)' }}>id + id</code>
            </span>
          </div>

          <div className="tree-container" style={{ padding: '2rem 0' }}>
            {/* Root Operator Node + */}
            <div className="tree-node" style={{ marginBottom: '2.5rem' }}>
              <div className="node-content node-terminal" style={{ backgroundColor: 'var(--primary-color)', width: 52, height: 52 }}>
                +
              </div>

              {/* Children: left id, right id */}
              <div style={{ display: 'flex', gap: '6rem', marginTop: '2.5rem' }}>
                <div className="tree-node">
                  <div className="node-content node-terminal" style={{ width: 48, height: 48 }}>
                    id
                  </div>
                </div>
                <div className="tree-node">
                  <div className="node-content node-terminal" style={{ width: 48, height: 48 }}>
                    id
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-callout" style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>
              <div className="academic-callout-title">Key Insight: Abstract Syntax Tree</div>
              Notice how the AST eliminates intermediate single-production non-terminals (like <code>E</code> and <code>T</code>). It captures only essential operators and operands needed for evaluation or code generation.
            </div>
          </div>
        </div>
      )}

      {/* Side by Side Comparison Tab */}
      {activeTab === 'comparison' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="card">
            <h4 className="card-title" style={{ color: 'var(--primary-color)' }}>
              <Network size={18} /> Parse Tree (Concrete)
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
              <li>Contains <strong>every symbol</strong> from grammar productions.</li>
              <li>Includes non-terminals (<code>E</code>, <code>T</code>) used during syntactic derivation.</li>
              <li>Reflects the exact formal grammar structure.</li>
              <li>Larger size with redundant structural nodes.</li>
            </ul>
          </div>

          <div className="card">
            <h4 className="card-title" style={{ color: 'var(--accent-color)' }}>
              <GitCommit size={18} /> Abstract Syntax Tree (AST)
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
              <li>Contains <strong>only essential semantic nodes</strong> (operators & operands).</li>
              <li>Omits artificial grammar non-terminals (like <code>E</code> → <code>T</code> chain).</li>
              <li>Streamlined tree optimized for semantic analysis & code generation.</li>
              <li>Smaller memory footprint and easier to traverse.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
