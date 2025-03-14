
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

  const pythonExample = `def fibonacci(n):
    """Generate the Fibonacci sequence up to n"""
    a, b = 0, 1
    result = []
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result

# Print the first 10 Fibonacci numbers
print(fibonacci(100))`;

  const goExample = `package main

import "fmt"

func main() {
    fmt.Println("Hello, Gopher!")
    
    // Create a slice of names
    names := []string{"Alice", "Bob", "Charlie"}
    
    // Iterate through the slice
    for _, name := range names {
        fmt.Printf("Hello, %s!\n", name)
    }
}`;

  const typescriptExample = `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  // Validate user
  if (!user.email.includes('@')) {
    throw new Error('Invalid email address');
  }
  
  // In a real app, this would talk to a database
  console.log('Creating user:', user.name);
  
  return {
    ...user,
    isActive: true
  };
}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">Component Demo</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">Vercel Style Code Block</h1>
          <p className="text-gray-600 text-lg">
            A beautifully designed code block component inspired by Vercel's v0.dev design aesthetic.
            Complete with syntax highlighting, line numbers, and a copy button. Now with support for multiple programming languages!
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
            <h2 className="text-2xl font-semibold mb-4">Python Example</h2>
            <VercelStyleCodeBlock 
              code={pythonExample} 
              filename="fibonacci.py" 
              language="python"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Go Example</h2>
            <VercelStyleCodeBlock 
              code={goExample} 
              filename="main.go" 
              language="go"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">TypeScript Example</h2>
            <VercelStyleCodeBlock 
              code={typescriptExample} 
              filename="user.ts" 
              language="typescript"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Without Filename (Language Only)</h2>
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
