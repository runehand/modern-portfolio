import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { workSlides } from "../data/projects";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={project.slug}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-70 sm:opacity-0 sm:group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  <div className="absolute inset-x-0 top-0 p-3 sm:p-4">
                    <div className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 xl:p-6">
                    <div className="translate-y-0 opacity-100 sm:translate-y-8 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                      <div className="mb-2 text-base font-semibold leading-tight xl:text-xl">
                        {project.title}
                      </div>
                      <div className="flex items-center gap-x-2 text-[11px] uppercase tracking-[0.3em] sm:text-[13px]">
                        <div>View</div>
                        <div className="text-accent">Details</div>
                        <div className="text-xl">
                          <BsArrowRight aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
