import React from "react";
import Post from "../components/Post";
import WhatsHappeing from "../components/WhatsHappeing";

const Section2 = () => {
  return (
    <div className="h-full border-[0_1px_0_1px] border-(--border-color) flex flex-col pb-50 relative overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* header for only phone */}

      <div className="h-[5vh] flex justify-center items-center sm:hidden fill-[#cecece] relative shrink-0 z-3">
        <div className="h-7 w-7 border rounded-[50%] grid place-content-center bg-[#84c346] text-[#eaeaea] lg:text-xl absolute top-3 left-3 cursor-pointer">
          <span>S</span>
        </div>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6">
          <g>
            <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
          </g>
        </svg>
      </div>

      {/* header for all devices */}

      <div className="h-[5vh] sm:h-[7vh] w-full flex border-[0_0_1px_0] border-(--border-color) sticky shrink-0 top-0 bg-black/50 backdrop-blur-lg z-2">
        <div className="h-full w-[50%] hover:bg-(--hover-color) flex justify-center items-end cursor-pointer">
          <div className="sm:h-full h-[75%] w-fit text-(--current-color) font-semibold text-[0.9rem] sm:text-[1rem] border-[0_0_5px_0] border-[#1D9Bf0] grid place-content-center">
            <span>For you</span>
          </div>
        </div>
        <div className="h-full w-[50%] hover:bg-(--hover-color) flex justify-center items-end cursor-pointer">
          <div className="sm:h-full h-[75%] w-fit text-neutral-500 font-semibold text-[0.9rem] sm:text-[1rem] grid place-content-center">
            <span>Following</span>
          </div>
        </div>
      </div>

      {/* whats happening container for other than phone*/}

      <WhatsHappeing />

      {/* post */}

      <Post />

      {/* footer for only phone */}

      <div className="h-[5vh] w-full fill-(--current-color) bg-black flex sm:hidden justify-around items-center fixed bottom-0 border-(--border-color) border-t z-1">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6">
          <g>
            <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
          </g>
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6">
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
        <svg viewBox="0 0 33 32" aria-hidden="true" class="h-6 w-6">
          <g>
            <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
          </g>
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6">
          <g>
            <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
          </g>
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6">
          <g>
            <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Section2;
