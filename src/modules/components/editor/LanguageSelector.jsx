import {  PiCaretDownThin } from "react-icons/pi";
import { LANGUAGE_VERSIONS } from "../../../constants";
import { useState } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <button
          className="w-[150px] h-[42px] border border-[#ffffff14] text-white rounded-[8px] px-3 flex justify-between items-center capitalize text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {language}
          <PiCaretDownThin className="text-[18px]" />
        </button>
        {isOpen && (
          <div className="absolute mt-1 w-[150px] bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10">
            {languages.map(([lang, version]) => (
              <div
                key={lang}
                className={`px-2 py-2 cursor-pointer hover:bg-gray-800 capitalize ${
                  lang === language
                    ? "text-blue-400 border border-[#ffffff1f] bg-[#0f0f0f]"
                    : "text-white border border-[#ffffff1f] bg-[#0f0f0f]"
                }`}
                onClick={() => {
                  onSelect(lang);
                  setIsOpen(false);
                }}
              >
                {lang}{" "}
                <span className="text-gray-400 text-sm ">({version})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
