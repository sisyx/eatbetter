import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "../components/shadcn/ui/button";

const ScrollToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-5 right-5 z-[1000]"
          onClick={scrollToTop}
          variant={"main"}
        >
          <FaArrowUp size={20} />
        </Button>
      )}
    </>
  );
};

export default ScrollToUp;
