import React, { useState, useEffect } from 'react';
import { codeExamples, type CodeExample } from './data';
import Prism from 'prismjs';
import 'prismjs/themes/prism-dark.css'; // Dark theme for Prism.js

interface GroupedExamples {
  [category: string]: CodeExample[];
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<CodeExample | null>(null);
  const [groupedExamples, setGroupedExamples] = useState<GroupedExamples>({});

  useEffect(() => {
    const grouped: GroupedExamples = codeExamples.reduce((acc, example) => {
      (acc[example.category] = acc[example.category] || []).push(example);
      return acc;
    }, {} as GroupedExamples);
    setGroupedExamples(grouped);
  }, []);

  useEffect(() => {
    if (selectedConcept) {
      Prism.highlightAll();
    }
  }, [selectedConcept]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedConcept(null); // Reset concept when category changes
  };

  const handleConceptClick = (concept: CodeExample) => {
    setSelectedConcept(concept);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedConcept(null);
  };

  const handleBackToConcepts = () => {
    setSelectedConcept(null);
  };

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#e5e5e5',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Align items to the start (left)
      boxSizing: 'border-box', // Include padding in element's total width and height
      width: '100vw', // Ensure main container takes full viewport width
      margin: '0', // Remove default body margin
    }}>
      <h1 style={{ color: '#e5e5e5', marginBottom: '30px', textAlign: 'center', width: '100%' }}>JavaScript Practice Code</h1>

      {!selectedCategory && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Object.keys(groupedExamples).map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                backgroundColor: '#222',
                color: '#e5e5e5',
                border: '1px solid #333',
                padding: '15px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.2em',
                width: '100%', // Full width
                boxSizing: 'border-box',
                textAlign: 'left',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#222')}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      {selectedCategory && !selectedConcept && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={handleBackToCategories}
            style={{
              backgroundColor: '#444',
              color: '#e5e5e5',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            &larr; Back to Categories
          </button>
          <h2 style={{ color: '#e5e5e5', marginBottom: '20px', textAlign: 'center', width: '100%' }}>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Concepts</h2>
          {groupedExamples[selectedCategory]?.map(concept => (
            <button
              key={concept.concept}
              onClick={() => handleConceptClick(concept)}
              style={{
                backgroundColor: '#222',
                color: '#e5e5e5',
                border: '1px solid #333',
                padding: '15px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1em',
                width: '100%', // Full width
                boxSizing: 'border-box',
                textAlign: 'left',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#222')}
            >
              {concept.concept.charAt(0).toUpperCase() + concept.concept.slice(1)}
            </button>
          ))}
        </div>
      )}

      {selectedConcept && (
        <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}> {/* Removed maxWidth */}
          <button
            onClick={handleBackToConcepts}
            style={{
              backgroundColor: '#444',
              color: '#e5e5e5',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
              width: '100%', // Ensure back button is full width
            }}
          >
            &larr; Back to Concepts
          </button>
          <h2 style={{ color: '#e5e5e5', marginBottom: '20px', textAlign: 'center', width: '100%' }}>{selectedConcept.concept.charAt(0).toUpperCase() + selectedConcept.concept.slice(1)}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}> {/* Added width: '100%' */}
            <div style={{
              flex: '1 1 45%',
              minWidth: '300px',
              backgroundColor: '#1a1a1a',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              overflowX: 'auto',
            }}>
              <h3>Code</h3>
              <pre><code className="language-javascript">{selectedConcept.code}</code></pre>
            </div>
            <div style={{
              flex: '1 1 45%',
              minWidth: '300px',
              backgroundColor: '#1a1a1a',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              overflowX: 'auto',
            }}>
              <h3>Output</h3>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{selectedConcept.output}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
