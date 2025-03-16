import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import ProductTab from "../../components/tab/ProductTab";


export default function Products() {

  return (
    <div
      id="products"
      className="max-w-[1440px] mx-auto md:px-[2rem] px-[1rem]"
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-3 items-center text-[white] h-[41px] px-[1.25rem]  border border-[#ffffff1f] bg-[#0f0f0f] rounded-[6rem] text-sm">
          <div className="w-[15px] h-[1px] bg-[#90f]" />
          <h4>Products</h4>
          <div className="w-[15px] h-[1px] bg-[#90f]" />
        </div>
      </div>
      <h2 className="md:text-[3.5rem] text-[3rem] font-medium leading-[1] text-white  mt-6 md:w-[650px] xl-w-auto">
        Your Go-To AI Toolkit for
        <br className="lg:flex hidden " /> Building and Creating using Quill AI
      </h2>
      <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] text-[#fff9] md:w-[500px]  my-6">
        Build websites, enhance code, host projects, and more—empowered by the
        leading AI innovation platform, no technical skills needed.
      </p>
      <a
        href="https://quill-ai.gitbook.io/quill-ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
          Learn More
          <span>
            <FaChevronRight />
          </span>
        </button>
      </a>
      <ProductTab />
      {/* <LayoutGridDemo/> */}
    </div>
  );
}
