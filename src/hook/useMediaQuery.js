import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  // console.log("useMediaQuery-hook")
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // console.log("useMediaQuery-useEffect")
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
