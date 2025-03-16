import { useRef, useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { CODE_SNIPPETS } from "../../../constants";
import { GoHomeFill } from "react-icons/go";
import { PiCaretDownThin } from "react-icons/pi";
import { VscDebug } from "react-icons/vsc";
import { MdFiberSmartRecord } from "react-icons/md";
import { SiBuildkite, SiDatabricks, SiSololearn } from "react-icons/si";
import { GrHost } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";

const aiTools = [
  { name: "Debug AI", icon: <VscDebug className="text-[20px]" /> },
  {
    name: "SmartCode AI",
    icon: <MdFiberSmartRecord className="text-[20px]" />,
  },
  { name: "Website AI", icon: <SiBuildkite className="text-[20px]" /> },
  { name: "DataFix AI", icon: <SiDatabricks className="text-[20px]" /> },
  { name: "HostEase AI", icon: <GrHost className="text-[20px]" /> },
  { name: "CodeEdge AI", icon: <IoCodeSlash className="text-[20px]" /> },
  { name: "Learn AI", icon: <SiSololearn className="text-[20px]" /> },
];

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isLoading, setIsLoading] = useState(true);
  const [editorLoading, setEditorLoading] = useState(true); // Track editor state

  useEffect(() => {
    // Simulate loading delay for fetching code
    const timeout = setTimeout(() => {
      setValue(CODE_SNIPPETS[language]);
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, [language]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    setEditorLoading(false); // Editor is now ready
  };

  const onSelect = (language) => {
    setLanguage(language);
    setIsLoading(true);
    setEditorLoading(true); // Reset when changing language
  };

  return (
    <div className="md:px-[4rem] px-[1rem] max-w-[1440px] mx-auto my-20">
      <div className="flex justify-between items-center text-white my-5">
        <div className="flex md:flex-row flex-col gap-2 items-center">
          <div className="md:flex hidden gap-2 items-center border border-[#ffffff1f] bg-[#0f0f0f] px-3 h-[42px] rounded-[8px] mr-6">
            <GoHomeFill className="text-[24px]" />
            <PiCaretDownThin className="text-[15px]" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 items-center w-auto lg:h-[41px] h-full px-[1.25rem] text-white">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-[#1f1f1f] hover:scale-105"
              >
                {tool.icon}
                <h4>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex hidden">
          <LanguageSelector language={language} onSelect={onSelect} />
        </div>
      </div>
      <div className="md:hidden flex">
        <LanguageSelector language={language} onSelect={onSelect} />
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-10 relative">
        <div className="md:w-1/2 w-full relative">
          {/* Editor */}
          <Editor
            options={{
              minimap: { enabled: true },
            }}
            height="50vh"
            theme="hc-black"
            language={language}
            defaultValue=""
            onMount={onMount}
            value={isLoading ? "" : value} // Show empty editor during loading
            onChange={(value) => setValue(value)}
          />

          {/* Editor Loading Overlay */}
          {editorLoading && (
            <div className="absolute  bg-black bg-opacity-80 text-white">
              <p>Loading Editor...</p>
            </div>
          )}
        </div>
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
