import React from "react";
import { memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useCopyToClipboard } from "../../hooks/use-copy-to-clipboard";

export const programmingLanguages = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
  tsx: ".tsx",
  // add more file extensions here
};

const CodeBlock = memo(function CodeBlock({ language, value }) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(value);
  };

  return (
    <div className="codeblock relative w-full select-text overflow-hidden rounded-lg bg-[#0f1012] font-sans selection:bg-white/10 selection:text-current">
      <div className="bg-background text-foreground border-border flex w-full items-center justify-between border-b border-[#444] px-4 py-2">
        <span className="text-xs lowercase text-[#b0b0b0]">{language}</span>
        <div className="flex items-center space-x-1">
          <button
            className="rounded-sm p-[3px] transition-all hover:bg-[#ffffff1d]"
            onClick={onCopy}
          >
            {isCopied ? (
              <CheckIcon size={14} className="text-[#b0b0b0]" />
            ) : (
              <CopyIcon size={14} className="text-[#b0b0b0]" />
            )}
            <span className="sr-only">Copy code</span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1rem",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});

export default CodeBlock;
