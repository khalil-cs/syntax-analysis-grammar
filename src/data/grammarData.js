export const sectionsList = [
  { id: 'home', title: 'Home', shortTitle: 'Home' },
  { id: 'introduction', title: 'Introduction to Syntax Analysis', shortTitle: 'Introduction' },
  { id: 'grammar', title: 'Grammar & Context-Free Grammar', shortTitle: 'Grammar' },
  { id: 'grammar-example', title: 'Grammar Derivation Example', shortTitle: 'Derivation Example' },
  { id: 'parse-tree', title: 'Parse Tree Representation', shortTitle: 'Parse Tree' },
  { id: 'syntax-process', title: 'Syntax Analysis Process', shortTitle: 'Analysis Process' },
  { id: 'parsing-types', title: 'Types of Parsing', shortTitle: 'Parsing Types' },
  { id: 'syntax-errors', title: 'Syntax Errors & Recovery', shortTitle: 'Syntax Errors' },
  { id: 'summary', title: 'Summary', shortTitle: 'Summary' },
  { id: 'references', title: 'References', shortTitle: 'References' }
];

export const grammarRules = [
  { id: 1, rule: 'E → E + T', description: 'Expression derives an Expression plus a Term' },
  { id: 2, rule: 'E → T', description: 'Expression derives a single Term' },
  { id: 3, rule: 'T → id', description: 'Term derives a terminal Identifier' }
];

export const symbolsDefinition = [
  { symbol: 'E', type: 'Non-terminal', meaning: 'Expression (Start Symbol)' },
  { symbol: 'T', type: 'Non-terminal', meaning: 'Term' },
  { symbol: 'id', type: 'Terminal', meaning: 'Identifier (variable or number token)' },
  { symbol: '+', type: 'Terminal', meaning: 'Addition operator' },
  { symbol: '→', type: 'Meta-symbol', meaning: 'Derivation symbol ("can be rewritten as")' }
];

export const derivationSteps = [
  {
    step: 1,
    current: ['E'],
    ruleUsed: 'Start Symbol Initialization',
    replacedIndex: 0,
    explanation: 'Begin derivation from the start symbol E of the grammar.',
    appliedRule: 'E'
  },
  {
    step: 2,
    current: ['E', '+', 'T'],
    ruleUsed: 'E → E + T',
    replacedIndex: 0,
    explanation: 'Apply rule 1 (E → E + T) to expand the start symbol E into an addition expression.',
    appliedRule: 'E → E + T'
  },
  {
    step: 3,
    current: ['T', '+', 'T'],
    ruleUsed: 'E → T',
    replacedIndex: 0,
    explanation: 'Apply rule 2 (E → T) to rewrite the leftmost non-terminal E into Term T.',
    appliedRule: 'E → T'
  },
  {
    step: 4,
    current: ['id', '+', 'T'],
    ruleUsed: 'T → id',
    replacedIndex: 0,
    explanation: 'Apply rule 3 (T → id) to replace the leftmost Term T with terminal identifier id.',
    appliedRule: 'T → id'
  },
  {
    step: 5,
    current: ['id', '+', 'id'],
    ruleUsed: 'T → id',
    replacedIndex: 2,
    explanation: 'Apply rule 3 (T → id) to replace the remaining Term T with terminal identifier id.',
    appliedRule: 'T → id'
  }
];

export const parsingTypesComparison = [
  {
    feature: 'Starting Point',
    topDown: 'Start Symbol (S)',
    bottomUp: 'Input Token Stream'
  },
  {
    feature: 'General Direction',
    topDown: 'Root → Leaves',
    bottomUp: 'Leaves → Root'
  },
  {
    feature: 'Derivation Technique',
    topDown: 'Leftmost derivation step',
    bottomUp: 'Reverse of rightmost derivation (Reductions)'
  },
  {
    feature: 'Primary Operation',
    topDown: 'Predictive expansion',
    bottomUp: 'Shift-Reduce actions'
  },
  {
    feature: 'Representative Algorithms',
    topDown: 'Recursive Descent, LL(1)',
    bottomUp: 'Shift-Reduce, LR(0), SLR(1), LALR(1), LR(1)'
  }
];

export const referenceList = [
  {
    authors: 'Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman',
    title: 'Compilers: Principles, Techniques, and Tools',
    edition: '2nd Edition',
    publisher: 'Addison-Wesley / Pearson',
    year: '2006',
    notes: 'Standard university textbook known as the "Dragon Book". Covers Syntax Analysis, Context-Free Grammars, and LR parsing algorithms in Chapters 4.'
  },
  {
    authors: 'Kenneth C. Louden',
    title: 'Compiler Construction: Principles and Practice',
    edition: '1st Edition',
    publisher: 'PWS Publishing Company',
    year: '1997',
    notes: 'Focuses on practical implementation of parsers, top-down recursive descent, and error recovery strategies.'
  },
  {
    authors: 'Keith D. Cooper and Linda Torczon',
    title: 'Engineering a Compiler',
    edition: '2nd Edition',
    publisher: 'Morgan Kaufmann',
    year: '2011',
    notes: 'Provides an engineering perspective on front-end parsing, AST construction, and practical grammar optimizations.'
  }
];
