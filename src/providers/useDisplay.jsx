import React, { useState, createContext, useContext } from "react";

const DisplayContext = createContext();

export function useDisplay() {
  return useContext(DisplayContext);
}

export default function UseDisplayProvider({Children}) {
  const [isDisplay, setIsDisplay] = useState(false);

  function onComment() {
      setIsDisplay(true)
  }

  const value = {isDisplay, onComment}

  return (
    <DisplayContext.Provider value={value}>
      {Children}
    </DisplayContext.Provider>
  );
}
