import React, { useState } from "react";
import FetchContext from "./FetchContext";

const FetchContextProvider = ({ children }) => {
  const [inHomeIsactive, setInHomeIsactive] = useState("for you");
  const [inExploreIsActive, setinExploreIsActive] = useState("for you");
  const [inNotificationIsActive, setInNotificationIsActive] = useState("all");
  const [inFollowIsActive, setInFollowIsActive] = useState("who to follow");
  const categoryMap = {
    "for you": "general",
    "trending": "technology",
    "news": "nation",
    "sports": "sports",
    "entertainment": "entertainment",
  };
  const category = categoryMap[inExploreIsActive] ?? "general";

  return (
    <FetchContext.Provider
      value={{
        inHomeIsactive,
        setInHomeIsactive,
        inExploreIsActive,
        setinExploreIsActive,
        category,
        inNotificationIsActive,
        setInNotificationIsActive,
        inFollowIsActive,
        setInFollowIsActive,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
