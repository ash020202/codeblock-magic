
import React, { useState, useCallback } from "react";
import { Highlight, themes } from "prism-react-renderer";
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

  return (
    <div
      className="rounded-md overflow-hidden border border-[#2a2a2a] bg-[#1e1e1e] w-full my-4 group transition-all duration-200"
      aria-label={ariaLabel}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#161616] border-b border-[#2a2a2a]">
        {filename && (
          <div className="text-sm font-mono text-gray-400">{filename}</div>
        )}
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
          language={language as any}
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
