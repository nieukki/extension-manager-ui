import React from "react";
import { useState } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    document.querySelector("body").classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header className="bg-neutral-0 dark:bg-neutral-7 w-3/4 mt-10 flex flex-row justify-between px-4 py-3 rounded-3xl max-sm:w-11/12 ">
      <div>
        <img src="/images/logo.svg" alt="logo" className="brightness" />
      </div>
      <img
        src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
        role="button"
        tabIndex={0}
        alt="sun or moon icon"
        className="bg-neutral-1 dark:bg-neutral-6 p-3 rounded-xl cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-red-7"
        onClick={() => toggleDarkMode()}
      />
    </header>
  );
};
