import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FaChevronRight } from "react-icons/fa6";
import website from "../../../assets/1.png";
import ai1 from "../../../assets/1.png";
import ai2 from "../../../assets/2.png";
import ai3 from "../../../assets/3.png";
import ai4 from "../../../assets/4.png";
import finance1 from "../../../assets/finance1.png";
import finance2 from "../../../assets/finance2.png";
import finance3 from "../../../assets/finance3.png";
import ecommerce1 from "../../../assets/ecommerce1.png";
import ecommerce2 from "../../../assets/ecommerce2.png";
import ecommerce3 from "../../../assets/ecommerce3.png";
import ecommerce4 from "../../../assets/ecommerce4.png";
import web31 from "../../../assets/web31.png";
import web32 from "../../../assets/web32.png";
import web33 from "../../../assets/web33.png";
import web34 from "../../../assets/web34.png";
import portfolio1 from "../../../assets/portfolio1.png";
import portfolio2 from "../../../assets/portfolio2.png";
import portfolio3 from "../../../assets/portofolio3.png";

const categories = [
  {
    name: "Web3",
    images: [web31, web32, web33, web34], // Example images for Web3
  },

  {
    name: "Finance",
    images: [finance1, finance2, finance3], // Example images for Finance
  },
  {
    name: "E-commerce",
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4], // Example images for E-commerce
  },

  {
    name: "Portfolio",
    images: [portfolio1, portfolio2, portfolio3], // Example images for Portfolio
  },
  {
    name: "AI",
    images: [ai1, ai2, ai3, ai4], // Example images for AI
  },
];

export default function WebsiteTab() {
  return (
    <div className="flex w-full  px-4 ">
      <div className="w-full">
        <TabGroup>
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <TabList className="flex flex-wrap justify-center items-center gap-4 md:border md:border-[#ffffff1f] p-2 rounded-full">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-2 px-10 text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>

          {/* Tab Content */}
          <TabPanels className="mt-[4rem]">
            {categories.map(({ name, images }) => (
              <TabPanel key={name}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-white">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      className="rounded-[1rem] w-[400px] h-[300px]"
                      src={image}
                      alt={`${name} preview ${index + 1}`}
                    />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
