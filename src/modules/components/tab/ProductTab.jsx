import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import debugai from "../../../assets/video/Debug.mp4";
import coderai from "../../../assets/video/Coder.mp4";
import imageai from "../../../assets/video/Image.mp4";
import mentorai from "../../../assets/video/Mentor.mp4";
import websiteai from "../../../assets/video/Website.mp4";
import validateai from "../../../assets/video/Validate.mp4";
import deployer from "../../../assets/video/Deployer.mp4";
import codetranslatorai from "../../../assets/video/CodeTranslator.mp4";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

const categories = [
  {
    name: "Debug AI",
    description: "Find & Fix Bugs in Seconds Using Debug AI",
    content:
      "Focus on building, not debugging AI detects and fixes errors for you.",
    features: [
      "Automatically detects and highlights code inconsistencies.",
      "Compatible with a wide range of programming languages for flexible debugging.",
      "Efficiently matches expected outcomes with actual results.",
      "Offers practical solutions for identified code problems.",
      "Recommends optimizations and performance enhancements based on comprehensive analysis.",
    ],
    video: debugai,
    link: "https://quill-ai-dapp.vercel.app/debug-ai", // Using video instead of image
  },
  {
    name: "Coder AI",
    description: "Your AI Coding Assistant Faster, Smarter, and More Efficient",
    content: "Write, Debug & Optimize Code Effortlessly with AI Guidance",
    features: [
      "Generates relevant, high-quality code snippets from simple prompts",
      "Simplifies complex coding concepts, making them easier to understand.",
      "Identifies errors and provides real-time corrections and improvement suggestions",
      "Supports multiple programming languages, enhancing versatility",
      "Promotes best practices and efficient coding methodologies for clean, optimized code.",
    ],
    video: coderai, // Image for SmartCode AI
    link: "https://quill-ai-dapp.vercel.app/coder-ai",
  },
  {
    name: "Website AI",
    description: "Build Your Website with AI in Minutes.",
    content:
      "From title to deployment, Website AI builds optimized, mobile-friendly sites effortlessly.",
    features: [
      "Creates complete websites from minimal input.",
      "Ensures optimal user experience and mobile responsiveness.",
      "Designs tailored layouts aligned with your website's purpose",
      "Automates deployment with clean, scalable code",
      "Drag-and-drop functionality for easy, intuitive website customization.",
      "Allows customization and integration of additional features as needed",
    ],
    video: websiteai, // Image for BuildSite AI
    link: "https://quill-ai-dapp.vercel.app/website-builder-ai",
  },
  {
    name: "Validate AI",
    description: "Error-Free Data Made Easy with AI",
    content:
      "That Checks, Fixes & Optimizes Your Data Instantly Real-time data validation, error correction, and optimization all powered by AI ",
    features: [
      "Supports a wide range of data types and formats for comprehensive validation",
      "Customizable validation rules to meet your specific project requirements.",
      "Provides instant feedback on validation errors, guiding users to correct inputs.",
      "Seamlessly integrates with your existing applications and frameworks for easy adoption.",
      "Ensures secure and accurate data handling across all platforms in real-time.",
    ],
    video: validateai, // Image for DataFix AI
    link: "https://quill-ai-dapp.vercel.app/validate-ai",
  },
  {
    name: "Deployer AI",
    description: "Deploy Websites with Ease Using Deployer AI",
    content:
      "Simplify the deployment process AI ensures speed, security, and seamless integration with your domain.",
    features: [
      "Instantly deploy static websites with minimal input and zero hassle.",
      "Optimized for lightning-fast load times and global accessibility.",
      "Seamlessly connects with custom domains for a professional online presence.",
      "Automatically configures HTTPS and essential security features.",
      "Scalable hosting solutions that adapt to your website's growing needs.",
    ],
    video: deployer, // Image for HostEase AI
    link: "https://quill-ai-dapp.vercel.app/deploy-ai",
  },
  {
    name: "Image Generator ",
    description: "Create detailed uncensored AI images.",
    content:
      "Bring your ideas to life with AI-generated images—fast, flexible, and fully customizable.",
    features: [
      "Create high-quality, detailed uncensored AI images from text descriptions in just moments.",
      "Customize visuals with various styles, themes, and designs to match your vision.",
      "AI adapts to your preferences, generating images that align perfectly with your needs.",
      "Instantly generate high-resolution images for marketing, web design, and social media.",
      "Ensures original, copyright-free images for seamless commercial and creative use.",
    ],
    video: imageai, // Image for CodeEdge AI
    link: "https://quill-ai-dapp.vercel.app/image-generator-ai",
  },
  {
    name: "Code Translator AI",
    description:
      "From One Coding Language to Another—Optimized & Hassle-Free with AI",
    content:
      "Instantly adapt your code to different languages while improving readability and execution speed.",
    features: [
      "Automatically translates code between multiple programming languages while preserving logic and structure.",
      "Optimizes code for efficiency, clarity, and best practices without altering functionality",
      "Identifies and fixes errors during translation, ensuring flawless execution across platforms..",
      "Provides AI-driven performance enhancements to make code run faster and smoother",
      "Delivers step-by-step explanations for every modification, helping developers understand improvements.",
    ],
    video: codetranslatorai, // Image for Debug AI
    link: "https://quill-ai-dapp.vercel.app/code-translator-ai",
  },
  {
    name: "Mentor AI",
    description: "Your Personalized Coding Coach with Mentor AI",
    content:
      "AI That Teaches, Explains, and Clarifies Every Step of Your Coding Journey in Multiple Languages",
    features: [
      "Comprehensive, step-by-step tutorials designed to match your learning pace.",
      "Supports a variety of programming languages, including Python, JavaScript, HTML, and more.",
      "Interactive quizzes and challenges to solidify learning and test your progress.",
      "Clear, concise explanations of complex coding concepts with real-world examples.",
      "Multilingual support to make coding accessible to learners from diverse backgrounds.",
    ],
    video: mentorai, // Image for Learn AI
    link: "https://quill-ai-dapp.vercel.app/mentor-ai",
  },
];

export default function ProductTab() {
  const [isPlaying, setIsPlaying] = useState({});

  const handlePlayPause = (videoElement, name) => {
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying((prev) => ({ ...prev, [name]: true }));
    } else {
      videoElement.pause();
      setIsPlaying((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="flex w-full py-24 px-4">
      <div className="w-full">
        <TabGroup>
          <div className="flex justify-center">
            <TabList className="flex flex-wrap justify-center items-center gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-2 px-5 text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanels className="mt-[7rem]">
            {categories.map(
              ({ name, description, content, features, video, link }) => (
                <TabPanel key={name}>
                  <div className="grid lg:grid-cols-2 items-center md:gap-20 xl:gap-10 gap-20 text-white">
                    <div className="col-span-1 ">
                      <h3 className="text-[2rem]">{description}</h3>
                      <p className="my-5">{content}</p>
                      <div className="mt-">
                        <div className="flex flex-col gap-5">
                          {features.map((feature, index) => (
                            <div key={index} className="flex gap-3 items-start">
                              <div className="w-[8px] h-[8px] bg-custom-gradient rounded-full mt-1.5" />
                              <h4>{feature}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="mt-7 flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
                          Get Started
                          <span>
                            <FaChevronRight />
                          </span>
                        </button>
                      </a>
                    </div>
                    <div className="col-span-1 flex justify-start items-start relative border border-[#ffffff44] rounded-[20px]">
                      <video
                        className="rounded-[1.2rem] md:w-[1000px] md:h-[380px] object-cover"
                        loop
                        playsInline
                        autoPlay
                        muted
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                  
                    </div>
                  </div>
                </TabPanel>
              )
            )}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
