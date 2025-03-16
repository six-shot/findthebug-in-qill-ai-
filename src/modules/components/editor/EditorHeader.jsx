import React, { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../../../constants";
import { GoHomeFill } from "react-icons/go";
import { PiCaretDownThin } from "react-icons/pi";

export default function EditorHeader() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="flex justify-between items-center text-white">
        <div className="flex gap-2 items-center">
            <div >
                <GoHomeFill/>
                       <PiCaretDownThin className="text-[18px]" />

            </div>

        </div>
      <LanguageSelector language={language} onSelect={onSelect} />
    </div>
  );
}
