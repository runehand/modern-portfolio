import { useEffect, useState } from "react";
import Link from "next/link";

import Socials from "../components/Socials";
import { heroData } from "../data/profile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateFromWindow = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const handlePageScroll = (event) => {
      if (typeof event.detail?.scrollTop === "number") {
        setIsScrolled(event.detail.scrollTop > 24);
        return;
      }

      updateFromWindow();
    };

    updateFromWindow();
    window.addEventListener("scroll", updateFromWindow, { passive: true });
    window.addEventListener("portfolio:page-scroll", handlePageScroll);

    return () => {
      window.removeEventListener("scroll", updateFromWindow);
      window.removeEventListener("portfolio:page-scroll", handlePageScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-30 w-full items-center px-6 transition-all duration-300 xl:h-[90px] xl:px-0 ${
        isScrolled
          ? "border-b border-white/10 bg-primary/55 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link
            href="/"
            className="group inline-flex flex-col leading-none"
            aria-label="Harry Lim home"
          >
            <span className="text-[20px] font-semibold tracking-[0.25em] text-white transition-colors duration-300 sm:text-[24px] xl:text-[26px] group-hover:text-accent">
              HARRY LIM
            </span>
            <span className="mt-2 inline-flex items-center gap-x-3 text-[10px] uppercase tracking-[0.45em] text-white/40">
              <span
                className="h-px w-8 bg-accent transition-all duration-300 group-hover:w-14"
                aria-hidden
              />
              {heroData.title}
            </span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
