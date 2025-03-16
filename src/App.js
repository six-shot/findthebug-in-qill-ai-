import logo from "./logo.svg";
import "./App.css";
import SubHero from "./modules/sections/subhero";
import Products from "./modules/sections/products";
import BottomFooter from "./modules/sections/bottomfooter";
import Varieties from "./modules/sections/varieties";
import { Hero, SpotlightPreview } from "./modules/sections/hero";
import { BuildParallaxMain } from "./modules/sections/build";
import { CTA } from "./modules/sections/cta";
import CodeEditor from "./modules/components/editor/CodeEditor";
import EditorHeader from "./modules/components/editor/EditorHeader";
import { useEffect, useState } from "react";
import Footer from "./modules/components/global/footer";
import { LampDemo } from "./modules/components/ui/Cta";
import ProductTab from "./modules/components/tab/ProductTab";
import { Toaster } from "sonner";

function App() {


  return (
    <div className="overflow-hidden">

      <Hero />
      {/* <SubHero /> */}

      <Products />

      <BuildParallaxMain />
      <Varieties />
      <CTA />
      <Footer />

      <BottomFooter />
    </div>
  );
}

export default App;
