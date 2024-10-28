import React from "react";
import HomePage from "./HomePage";
import ScrollToTop from "../Components/Current/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Nav from "../Components/Current/Nav";
import { ButtonV1 } from "@pixaui/button-v1";
import { Plane } from "lucide-react";
import { ButtonV2 } from "@pixaui/button-v2";
import { ButtonV3 } from "@pixaui/button-v3";

const Test = () => {
  return (
    <>
      <Nav />
      <HomePage />
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
      <AnimatePresence>
        <ScrollToTop />
      </AnimatePresence>
    </>
  );
};

export default Test;
