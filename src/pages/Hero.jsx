import React from "react";
import ButtonPage from "./ButtonPage";
import CardPage from "./CardPage";
import HomePage from "./HomePage";
import ScrollToTop from "../Components/Current/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Nav from "../Components/Current/Nav";
import TabPage from "./TabPage";
import MiscellaneousPage from "./MiscellaneousPage";
import { ButtonV1 } from "@pixaui/button-v1";
import { Plane } from "lucide-react";
import { ButtonV2 } from "@pixaui/button-v2";
import { ButtonV3 } from "@pixaui/button-v3";

const tabs = ["Button", "Cards", "Tabs", "Modals", "Miscellaneous"];

const Hero = () => {
  const [active, setActive] = React.useState(tabs[0]);

  return (
    <>
      <Nav />
      <HomePage />
      <div className="max-w[1440px] px-auto flex h-screen w-full flex-col items-center justify-start gap-4 bg-white">
        <div
          className={
            "xsm dark:border[#515151] mb-8 flex flex-wrap items-center gap-2 border-b border-gray-200"
          }
        >
          {tabs.map((text) => (
            <button
              key={text}
              onClick={() => setActive(text)}
              className={` ${
                active === text ? "text-[#212121]" : "text-[#515151]"
              } relative rounded-md px-2 py-1 text-sm font-medium transition-all duration-300 hover:text-[#212121]`}
            >
              <span className="xsm relative z-10 text-lg font-[500]">
                {text}
              </span>
              {active === text && (
                <motion.div
                  className="absolute bottom-0 left-0 flex size-full h-full w-full items-end justify-center"
                  layoutId="underline"
                  transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                >
                  <span className="z-0 h-[3px] w-3/4 rounded-t-sm bg-[#212121]"></span>
                </motion.div>
              )}
            </button>
          ))}
        </div>
        <ButtonV1
          title="ButtonV1"
          svgColor="#212121"
          icon={
            <Plane
              size={18}
              strokeWidth={1.5}
              className="text-[#212121] dark:text-[#e2e2e2]"
            />
          }
          className="rounded-xl border-[#d9d9d9] py-4 text-[#212121] backdrop-blur-sm dark:border-[#212121] dark:text-[#e2e2e2]"
        />
        <ButtonV2
          title="ButtonV2"
          bgColor="bg-[#f0900f]"
          className="rounded-xl border border-[#d9d9d9] p-8 text-[#212121] backdrop-blur-sm"
        />
        <ButtonV3
          title="Generate"
          borderRadius="12px"
          color="#ff0090"
          padding="12px"
        />
        {active === "Button" && <ButtonPage />}
        {active === "Cards" && <CardPage />}
        {active === "Tabs" && <TabPage />}
        {active === "Miscellaneous" && <MiscellaneousPage />}
      </div>
      <AnimatePresence>
        <ScrollToTop />
      </AnimatePresence>
    </>
  );
};

export default Hero;
