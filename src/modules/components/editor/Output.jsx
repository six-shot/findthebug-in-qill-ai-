import { useState } from "react";
import { executeCode } from "../../../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white md:w-1/2 w-full pl-4">
      <button
        className={`flex items-center gap-2 px-5 h-[42px] text-xs font-medium tracking-[2.4px] uppercase text-white bg-custom-gradient hover:bg-custom-gradientt shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem] transition-all ease-linear duration-[250ms] mb-3 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4z"
              ></path>
            </svg>
            Running...
          </>
        ) : (
          "Run Code"
        )}
      </button>

      <div
        className=""
        style={{
          color: isError ? "red" : "white",
          borderColor: isError ? "red" : "#333",
        }}
      >
        {output
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
