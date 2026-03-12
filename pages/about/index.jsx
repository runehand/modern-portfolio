import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import * as SiIcons from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import {
  aboutFocusAreas,
  aboutStats,
  aboutSummary,
  aboutTabs,
  profileLinks,
} from "../../data/profile";
import usePortfolioPageScroll from "../../hooks/usePortfolioPageScroll";
import { fadeIn } from "../../variants";

const containsAny = (value, keywords) => {
  const normalized = value.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword));
};

const skillIconRules = [
  { keywords: ["react native", "react.js", "react"], icon: "SiReact" },
  { keywords: ["next.js", "nextjs"], icon: "SiNextdotjs" },
  { keywords: ["vue.js", "vue"], icon: "SiVuedotjs" },
  { keywords: ["angular"], icon: "SiAngular" },
  { keywords: ["typescript"], icon: "SiTypescript" },
  { keywords: ["javascript"], icon: "SiJavascript" },
  { keywords: ["redux"], icon: "SiRedux" },
  { keywords: ["zustand"], icon: "SiZustand" },
  { keywords: ["tailwind"], icon: "SiTailwindcss" },
  {
    keywords: ["styled components", "styled-components"],
    icon: "SiStyledcomponents",
  },
  { keywords: ["mui", "material ui", "material-ui"], icon: "SiMaterialui" },
  { keywords: ["shadcn"], icon: "SiShadcnui" },
  { keywords: ["framer"], icon: "SiFramer" },
  { keywords: ["three.js", "r3f", "three"], icon: "SiThreedotjs" },
  { keywords: ["storybook"], icon: "SiStorybook" },
  { keywords: ["vite"], icon: "SiVite" },
  { keywords: ["webpack"], icon: "SiWebpack" },
  { keywords: ["node.js", "nodejs", "node"], icon: "SiNodedotjs" },
  { keywords: ["express"], icon: "SiExpress" },
  { keywords: ["nest.js", "nestjs"], icon: "SiNestjs" },
  { keywords: ["laravel"], icon: "SiLaravel" },
  { keywords: ["python"], icon: "SiPython" },
  { keywords: ["django"], icon: "SiDjango" },
  { keywords: ["flask"], icon: "SiFlask" },
  { keywords: ["fastapi", "fast api"], icon: "SiFastapi" },
  { keywords: ["asp.net", "dotnet", ".net"], icon: "SiDotnet" },
  { keywords: ["postgres"], icon: "SiPostgresql" },
  { keywords: ["mysql"], icon: "SiMysql" },
  { keywords: ["mongodb", "mongo"], icon: "SiMongodb" },
  { keywords: ["redis"], icon: "SiRedis" },
  { keywords: ["graphql"], icon: "SiGraphql" },
  { keywords: ["prisma"], icon: "SiPrisma" },
  { keywords: ["flutter"], icon: "SiFlutter" },
  { keywords: ["expo"], icon: "SiExpo" },
  { keywords: ["swift"], icon: "SiSwift" },
  { keywords: ["kotlin"], icon: "SiKotlin" },
  { keywords: ["firebase"], icon: "SiFirebase" },
  { keywords: ["gcp", "google cloud"], icon: "SiGooglecloud" },
  { keywords: ["xcode"], icon: "SiXcode" },
  { keywords: ["android studio"], icon: "SiAndroidstudio" },
  { keywords: ["solidity"], icon: "SiSolidity" },
  { keywords: ["hardhat"], icon: "SiHardhat" },
  { keywords: ["foundry"], icon: "SiFoundry" },
  { keywords: ["openzeppelin"], icon: "SiOpenzeppelin" },
  { keywords: ["walletconnect"], icon: "SiWalletconnect" },
  { keywords: ["metamask"], icon: "SiMetamask" },
  { keywords: ["arbitrum"], icon: "SiArbitrum" },
  { keywords: ["optimism"], icon: "SiOptimism" },
  { keywords: ["ethers"], icon: "SiEthers" },
  { keywords: ["ethereum", "evm", "erc"], icon: "SiEthereum" },
  { keywords: ["aws", "amazon web services"], icon: "SiAmazonaws" },
  { keywords: ["terraform"], icon: "SiTerraform" },
  { keywords: ["kubernetes", "k8s"], icon: "SiKubernetes" },
  { keywords: ["helm"], icon: "SiHelm" },
  { keywords: ["docker"], icon: "SiDocker" },
  { keywords: ["nginx"], icon: "SiNginx" },
  { keywords: ["cloudflare"], icon: "SiCloudflare" },
  { keywords: ["github actions"], icon: "SiGithubactions" },
  { keywords: ["vercel"], icon: "SiVercel" },
  { keywords: ["netlify"], icon: "SiNetlify" },
  { keywords: ["prometheus"], icon: "SiPrometheus" },
  { keywords: ["grafana"], icon: "SiGrafana" },
  { keywords: ["airflow"], icon: "SiApacheairflow" },
  { keywords: ["n8n"], icon: "SiN8n" },
  { keywords: ["zapier"], icon: "SiZapier" },
  { keywords: ["openai"], icon: "SiOpenai" },
  { keywords: ["azure"], icon: "SiMicrosoftazure" },
  { keywords: ["mlflow"], icon: "SiMlflow" },
  { keywords: ["pinecone"], icon: "SiPinecone" },
  { keywords: ["weaviate"], icon: "SiWeaviate" },
];

const getSkillIcon = (tag) => {
  for (const rule of skillIconRules) {
    if (!containsAny(tag, rule.keywords)) continue;
    const Icon = SiIcons[rule.icon];
    if (Icon) return Icon;
  }
  return null;
};

const About = () => {
  const [index, setIndex] = useState(0);
  const handlePageScroll = usePortfolioPageScroll();
  const activeTab = aboutTabs[index];
  const isExperienceTab = activeTab.title === "experience";
  const isSkillsTab = activeTab.title === "skills";

  return (
    <div
      className="relative h-full overflow-x-hidden overflow-y-auto bg-primary/30 py-28 text-center xl:py-32 xl:text-left"
      onScroll={handlePageScroll}
    >
      <Circles fixed />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pointer-events-none fixed bottom-0 -left-[260px] hidden opacity-30 xl:flex"
      >
        <Avatar />
      </motion.div>

      <div className="container relative z-20 mx-auto flex min-h-full flex-col gap-8 xl:flex-row xl:items-start xl:gap-x-12">
        <div className="flex flex-1 flex-col xl:sticky xl:top-24 xl:max-w-[55%] xl:self-start">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 max-w-[460px]"
          >
            Simple. <span className="text-accent">Fast.</span> Reliable.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-6 max-w-[520px] px-2 xl:mx-0 xl:px-0"
          >
            {aboutSummary}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="mb-6 flex flex-wrap justify-center gap-2 xl:justify-start"
          >
            {aboutFocusAreas.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            className="mb-6 grid gap-3 sm:grid-cols-3"
          >
            {aboutStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] border border-white/10 bg-white/5 p-4 text-left backdrop-blur-sm"
              >
                <div className="mb-1 text-2xl font-extrabold text-accent xl:text-3xl">
                  <CountUp start={0} end={item.value} duration={4} />
                  {item.suffix}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] leading-[1.5] text-white/60">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap justify-center gap-4 xl:justify-start"
          >
            <Link
              href={profileLinks.cv}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-[52px] items-center rounded-full bg-accent px-7 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              Download CV
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center rounded-full border border-white/20 px-7 text-sm font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Contact me
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex w-full flex-col xl:max-w-[45%]"
        >
          <div className="mx-auto mb-6 flex flex-wrap justify-center gap-4 xl:mx-0 xl:justify-start">
            {aboutTabs.map((item, itemI) => (
              <button
                type="button"
                key={itemI}
                aria-pressed={index === itemI}
                className={`${index === itemI
                  ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  : ""
                  } relative text-sm capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div
            className={`py-2 xl:py-4 ${isExperienceTab
              ? "flex flex-col gap-4"
              : isSkillsTab
                ? "flex flex-col gap-4"
                : "grid gap-4"
              }`}
          >
            {activeTab.info.map((item, itemI) => (
              <div
                key={itemI}
                className="rounded-[24px] border border-white/10 bg-white/5 text-left backdrop-blur-sm"
              >
                {isExperienceTab ? (
                  <div className="flex flex-col gap-4 p-5 xl:p-6">
                    {item.stage && (
                      <div className="text-[11px] uppercase tracking-[0.3em] text-accent">
                        {item.stage}
                      </div>
                    )}

                    <div className="text-lg font-semibold text-white xl:text-xl">
                      {item.title}
                    </div>

                    {item.company && (
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                        {item.company}
                      </div>
                    )}

                    {item.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <div
                            key={tag}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/80"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {item.details?.length ? (
                      <div className="grid gap-2">
                        {item.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex gap-x-3 text-sm text-white/70"
                          >
                            <div
                              className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent ring-2 ring-accent/30"
                              aria-hidden
                            />
                            <div>{detail}</div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="p-5">
                    {(item.eyebrow || item.stage) && (
                      <div className="text-[11px] uppercase tracking-[0.3em] text-accent">
                        {item.eyebrow || item.stage}
                      </div>
                    )}

                    <div className="mt-2 text-lg font-semibold text-white">
                      {item.title}
                    </div>

                    {item.company && (
                      <div className="mt-1 text-sm text-white/60">
                        {item.company}
                      </div>
                    )}

                    {item.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => {
                          const Icon = isSkillsTab ? getSkillIcon(tag) : null;
                          const hasIcon = Boolean(Icon);

                          return (
                            <div
                              key={tag}
                              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 py-2 text-xs text-white/80 ${hasIcon ? "pl-2.5 pr-3" : "px-3"
                                }`}
                            >
                              {Icon ? (
                                <Icon
                                  className="h-3.5 w-3.5 flex-shrink-0 text-white/80"
                                  aria-hidden
                                />
                              ) : null}
                              <span className="leading-none">{tag}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                    {item.details?.length ? (
                      <div className="mt-4 grid gap-2">
                        {item.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex gap-x-3 text-sm text-white/70"
                          >
                            <div
                              className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent ring-2 ring-accent/30"
                              aria-hidden
                            />
                            <div>{detail}</div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
