import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="relative bg-white">
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-10 h-[400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(#A4A4A3, transparent 50%)",
          }}
        />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
          aria-hidden
        >
          <defs>
            <pattern
              id="s74rfh-fch9w-0879dst"
              width={100}
              height={100}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#s74rfh-fch9w-0879dst)"
          />
        </svg>
        <div className="mx-auto max-w-2xl py-24 text-center">
          <div className="relative flex flex-col gap-12">
            <h1 className="relative mb-4 text-7xl font-semibold">Pixa UI</h1>
            <p className="text-xl text-[#5c5c5c]">
              A Collection of <span className="font-[500]">Open Source</span>{" "}
              Components for &nbsp;
              <span className="rounded-[0.25rem] border bg-[#dedede3f] font-[500]">
                React + TailwindCSS
              </span>{" "}
              &nbsp; for your Project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
