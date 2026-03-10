import { useEffect } from "react";

const dispatchPortfolioScroll = (scrollTop) => {
  window.dispatchEvent(
    new CustomEvent("portfolio:page-scroll", {
      detail: { scrollTop },
    })
  );
};

const usePortfolioPageScroll = () => {
  useEffect(() => {
    dispatchPortfolioScroll(0);

    return () => {
      dispatchPortfolioScroll(0);
    };
  }, []);

  return (event) => {
    dispatchPortfolioScroll(event.currentTarget.scrollTop);
  };
};

export default usePortfolioPageScroll;
