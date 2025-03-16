import React from "react";
import quill from "../../../../assets/Logo1.png";
import { FaChevronRight, FaMedium, FaTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "sonner";

export default function Footer() {
  const menuItems = [
    { id: "home", name: "Home" },
    { id: "#products", name: "Products" },
    { id: "#templates", name: "Templates" },
  ];
  return (
    <div className="">
      <div className="why w-full sm:h-[300px] h-[200px] z-[-10] flex text-white  overflow-hidden ">
        <div className="container mx-auto px-[5rem] mt-10 md:mt-20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={quill} alt="Logo" className="w-[48px]" />
            <h4 className="uppercase text-[20px] text-white">QUill Ai</h4>
          </div>

          <div className="flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="hover:text-gray-300 flex items-center gap-2 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex gap-6 md:pb-0 pb-5">
            <FaTwitter
              className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
              onClick={() => {
                toast.success("Coming Soon !!!");
              }}
              size={24}
            />

            <FaTelegramPlane
              className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
              onClick={() => {
                toast.success("Coming Soon !!!");
              }}
              size={24}
            />
            <a
              href="https://medium.com/@quillai"
              className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
