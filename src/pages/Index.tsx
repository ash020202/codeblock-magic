
import React from "react";
import VercelStyleCodeBlock from "../components/VercelStyleCodeBlock";

const Index = () => {
  const exampleCode = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`;

  const cssExample = `/* Main styles */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">Component Demo</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">Vercel Style Code Block</h1>
          <p className="text-gray-600 text-lg">
            A beautifully designed code block component inspired by Vercel's v0.dev design aesthetic.
            Complete with syntax highlighting, line numbers, and a copy button.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">React Component Example</h2>
            <VercelStyleCodeBlock 
              code={exampleCode} 
              filename="Counter.jsx" 
              language="jsx"
              aria-label="React Counter Component Code"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">CSS Example</h2>
            <VercelStyleCodeBlock 
              code={cssExample} 
              filename="styles.css" 
              language="css"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Without Filename</h2>
            <VercelStyleCodeBlock 
              code="console.log('Hello, world!');" 
              language="javascript"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
