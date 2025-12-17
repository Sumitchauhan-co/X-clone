import React from "react";
import TodaysNews from "../components/TodaysNews";

const Section3 = () => {
  return (
    <div className="h-full w-[90%] xl:w-[67%] hidden lg:flex flex-col gap-4 ml-[5%] pb-25 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* search bar */}

      <div className="h-[7vh] w-full flex justify-center items-center mt-1">
        <div className="h-full w-full flex justify-start items-center border-(--border-color) rounded-4xl border">
          <div className="h-10 w-10 fill-neutral-500 flex justify-center items-center">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4">
              <g>
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
              </g>
            </svg>
          </div>
          <input
            className="h-full w-full border-none outline-none text-[0.9rem]"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* todays news */}

      <TodaysNews />

      {/* whats happening */}

      <div className="h-fit w-full border-(--border-color) border rounded-2xl">
        <div className="h-12 w-ful p-3 flex">
          <span className="h-full w-full text-(--current-color) text-xl font-bold flex justify-start items-center">
            What's happening
          </span>
        </div>
        <div className="h-20 w-full p-3 relative hover:bg-neutral-950 cursor-pointer">
          <p className="h-[25%] w-full flex justify-start items-center text-wrap text-neutral-500 text-[0.8rem]">
            Lorem ipsum . dolor sit amet . consectetur
          </p>
          <p className="h-[50%] w-full flex justify-start items-center text-wrap text-(--current-color) font-semibold">
            Lorem ipsum, dolor
          </p>
          <p className="h-[25%] w-full flex justify-start items-center text-wrap text-neutral-500 text-[0.8rem]">
            Lorem ipsum . dolor sit amet . consectetur
          </p>
          <div className="h-10 w-10 flex justify-end items-center fill-neutral-400 absolute right-3 top-3">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4">
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="h-12 w-full p-3 hover:bg-neutral-950 flex justify-start items-center text-blue-400 text-[0.9rem] cursor-pointer">
          <span>Show more</span>
        </div>
      </div>

      {/* who to follow */}

      <div className="h-fit w-full border-(--border-color) border rounded-2xl">
        <div className="h-12 w-ful p-3 flex">
          <span className="h-full w-full text-(--current-color) text-xl font-bold flex justify-start items-center">
            Who to follow
          </span>
        </div>
        <div className="h-15 w-full p-3 hover:bg-neutral-950 cursor-pointer flex justify-start items-center relative">
          <div className="h-10 w-10 border rounded-[50%] bg-amber-500"></div>
          <div className="h-full w-[90%] flex flex-col pl-2">
            <div className="h-[50%] w-full flex justify-start items-center text-wrap bg-auto text-(--current-color) font-semibold">
              Lorem ipsum
            </div>
            <div className="h-[50%] w-full flex justify-start items-center text-wrap bg-auto text-neutral-500">
              @Lorem
            </div>
          </div>
          <div className="h-8 w-20 bg-(--current-color) border rounded-2xl text-black text-[0.9rem] font-semibold flex justify-center items-center absolute right-3 hover:bg-neutral-300">
            Follow
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="h-fit w-full flex flex-wrap pl-5">
        <div className="h-5 w-fit text-neutral-500 text-[0.65rem]">
          <span className="hover:underline">Terms of Service</span>
          <span className="pl-2 pr-2">|</span>
        </div>
        <div className="h-5 w-fit text-neutral-500 text-[0.65rem]">
          <span className="hover:underline">Privacy Policy</span>
          <span className="pl-2 pr-2">|</span>
        </div>
        <div className="h-5 w-fit text-neutral-500 text-[0.65rem]">
          <span className="hover:underline">Cookie Policy</span>
          <span className="pl-2 pr-2">|</span>
        </div>
        <div className="h-5 w-fit text-neutral-500 text-[0.65rem]">
          <span className="hover:underline">Accessibility</span>
          <span className="pl-2 pr-2">|</span>
        </div>
        <div className="h-5 w-fit text-neutral-500 text-[0.65rem]">
          <span className="hover:underline">Ads info</span>
          <span className="pl-2 pr-2">|</span>
        </div>
        <div className="h-5 w-fit text-neutral-500 text-[0.65rem]">
          <span className="hover:underline">More...</span>
          <span className="pl-3">&copy;2025 X Corp.</span>
        </div>
      </div>
    </div>
  );
};

export default Section3;
