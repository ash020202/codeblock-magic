
import React, { useState, useCallback } from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";

interface VercelStyleCodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  "aria-label"?: string;
}

const VercelStyleCodeBlock: React.FC<VercelStyleCodeBlockProps> = ({
  code,
  filename,
  language = "jsx",
  "aria-label": ariaLabel,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  // Map common extensions to their language identifier
  const getLanguageFromFilename = (filename: string): string => {
    const extension = filename?.split('.').pop()?.toLowerCase();
    const extensionMap: { [key: string]: string } = {
      js: "javascript",
      jsx: "jsx",
      ts: "typescript",
      tsx: "tsx",
      py: "python",
      rb: "ruby",
      java: "java",
      php: "php",
      go: "go",
      rs: "rust",
      c: "c",
      cpp: "cpp",
      cs: "csharp",
      swift: "swift",
      kt: "kotlin",
      sql: "sql",
      html: "html",
      css: "css",
      scss: "scss",
      json: "json",
      md: "markdown",
      yml: "yaml",
      yaml: "yaml",
      sh: "bash",
      bash: "bash",
      // Add more mappings as needed
    };
    
    return extension ? (extensionMap[extension] || extension) : "text";
  };

  // Determine the language to use for syntax highlighting
  const getLanguageForPrism = (lang: string): Language => {
    // If filename is provided and language is not explicitly set, try to determine from filename
    if (filename && lang === "jsx") {
      lang = getLanguageFromFilename(filename);
    }
    
    // Map to prism language identifier
    const languageMap: { [key: string]: Language } = {
      javascript: "javascript",
      js: "javascript",
      typescript: "typescript",
      ts: "typescript",
      jsx: "jsx",
      tsx: "tsx",
      python: "python",
      py: "python",
      ruby: "ruby",
      java: "java",
      php: "php",
      go: "go",
      rust: "rust",
      c: "c",
      cpp: "cpp",
      csharp: "csharp",
      cs: "csharp",
      swift: "swift",
      kotlin: "kotlin",
      sql: "sql",
      html: "html",
      css: "css",
      scss: "scss",
      json: "json",
      markdown: "markdown",
      md: "markdown",
      yaml: "yaml",
      yml: "yaml",
      bash: "bash",
      shell: "bash",
      sh: "bash",
      // Add more mappings as needed
    };
    
    // Return the mapped language or fallback to 'jsx' if not found
    return (languageMap[lang.toLowerCase()] || "jsx") as Language;
  };

  const prismLanguage = getLanguageForPrism(language);

  return (
    <div
      className="rounded-md overflow-hidden border border-[#2a2a2a] bg-[#1e1e1e] w-full my-4 group transition-all duration-200"
      aria-label={ariaLabel}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#161616] border-b border-[#2a2a2a]">
        <div className="flex items-center">
          {filename && (
            <div className="text-sm font-mono text-gray-400">{filename}</div>
          )}
          {!filename && language && (
            <div className="text-sm font-mono text-gray-400">{language}</div>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className={`flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium transition-all rounded-md ${
            copied
              ? "bg-opacity-10 bg-[#2ec866] text-[#2ec866]"
              : "text-gray-400 hover:text-gray-200 hover:bg-white hover:bg-opacity-10"
          }`}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy
            </>
          )}
        </button>
      </div>
      <div className="relative">
        <Highlight
          theme={themes.dracula}
          code={code.trim()}
          language={prismLanguage}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} overflow-x-auto p-4 text-sm`}
              style={{ ...style, backgroundColor: "transparent" }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className="inline-block w-5 mr-4 text-right select-none text-gray-500 opacity-50">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default VercelStyleCodeBlock;
