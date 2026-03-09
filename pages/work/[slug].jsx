import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import {
  getProjectBySlug,
  projects,
} from "../../data/projects";
import { fadeIn } from "../../variants";

import "swiper/css";

export const getStaticPaths = async () => ({
  paths: projects.map((project) => ({
    params: { slug: project.slug },
  })),
  fallback: false,
});

export const getStaticProps = async ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

const ProjectDetail = ({ project }) => {
  const prevButtonClass = `project-slider-prev-${project.slug}`;
  const nextButtonClass = `project-slider-next-${project.slug}`;

  useEffect(() => {
    const resetHeaderScroll = () => {
      window.dispatchEvent(
        new CustomEvent("portfolio:page-scroll", {
          detail: { scrollTop: 0 },
        })
      );
    };

    resetHeaderScroll();

    return () => {
      resetHeaderScroll();
    };
  }, []);

  const handlePageScroll = (event) => {
    window.dispatchEvent(
      new CustomEvent("portfolio:page-scroll", {
        detail: { scrollTop: event.currentTarget.scrollTop },
      })
    );
  };

  return (
    <>
      <Head>
        <title>{project.title} | Harry Lim</title>
        <meta name="description" content={project.intro} />
      </Head>

      <div
        className="relative h-full overflow-x-hidden overflow-y-auto bg-primary/30 py-28 xl:py-36"
        onScroll={handlePageScroll}
      >
        <Circles />
        <Bulb />

        <div className="container relative z-20 mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-x-3 text-xs uppercase tracking-[0.35em] text-white/60 transition-colors duration-300 hover:text-accent"
            >
              <BsArrowLeft aria-hidden />
              Back to work
            </Link>
          </motion.div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.18fr)] xl:items-start">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full"
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-accent backdrop-blur-sm">
                {project.category}
              </div>

              <h1 className="h2 mb-3">
                {project.title} <span className="text-accent">.</span>
              </h1>

              <p className="mb-8 max-w-xl">{project.intro}</p>

              <div className="mb-8 max-w-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="mb-1 text-[11px] uppercase tracking-[0.25em] text-white/40">
                    Role
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.role}
                  </div>
                </div>
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  All projects
                </Link>
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-x-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Visit live site
                    <BsArrowUpRight aria-hidden />
                  </Link>
                ) : (
                  <div className="inline-flex items-center rounded-full border border-dashed border-white/15 px-5 py-3 text-sm text-white/50">
                    Live link coming soon
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm xl:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.35em] text-accent">
                      Project gallery
                    </div>
                    <div className="mt-2 text-sm text-white/40">
                      Review the main screens without leaving the case study.
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className={`${prevButtonClass} project-slider-nav inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white`}
                      aria-label="Previous screenshot"
                    >
                      <BsArrowLeft aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={`${nextButtonClass} project-slider-nav inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white`}
                      aria-label="Next screenshot"
                    >
                      <BsArrowRight aria-hidden />
                    </button>
                  </div>
                </div>

                <Swiper
                  navigation={{
                    prevEl: `.${prevButtonClass}`,
                    nextEl: `.${nextButtonClass}`,
                  }}
                  modules={[Navigation]}
                  className="overflow-hidden rounded-[24px]"
                >
                  {project.screenshots.map((shot) => (
                    <SwiperSlide key={`${project.slug}-${shot.caption}`}>
                      <div className="overflow-hidden rounded-[24px] bg-black/20">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            sizes="(min-width: 1200px) 52vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="px-2 pb-2 pt-4 text-xs uppercase tracking-[0.3em] text-white/40">
                        {shot.caption}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-3 text-xl font-semibold text-white">
                Overview
              </div>
              <p>{project.overview}</p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 text-xl font-semibold text-white">
                Tech stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm xl:col-span-2"
            >
              <div className="mb-4 text-xl font-semibold text-white">
                Key features
              </div>
              <div className="grid gap-3 xl:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-x-3 rounded-2xl border border-white/5 bg-black/10 p-4 text-sm text-white/70"
                  >
                    <div
                      className="mt-2 h-2 w-2 rounded-full bg-accent"
                      aria-hidden
                    />
                    <div>{feature}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
