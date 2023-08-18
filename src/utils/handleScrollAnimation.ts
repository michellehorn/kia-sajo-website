import { useState, useEffect } from "react";

const useScrollAnimation = (targetId: string) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        const offsetTop = target.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        if (scrollY > offsetTop - windowHeight) {
          setAnimate(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetId]);

  return animate;
};

export default useScrollAnimation;
