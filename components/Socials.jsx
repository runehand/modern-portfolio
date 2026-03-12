import Link from "next/link";

import {
  RiGithubLine,
  RiMailLine,
  RiTelegramLine,
} from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import { socialLinks } from "../data/profile";

const StackOverflowFallback = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M6 7h12" />
    <path d="M7 11h10" />
    <path d="M8 15h8" />
    <path d="M5 19h14v-4" />
  </svg>
);

const StackOverflowIcon = SiIcons.SiStackoverflow || StackOverflowFallback;

const iconMap = {
  github: RiGithubLine,
  email: RiMailLine,
  telegram: RiTelegramLine,
  stackoverflow: StackOverflowIcon,
};

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialLinks.map((social, i) => {
        const Icon = iconMap[social.key];

        return (
          <Link
            key={i}
            title={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-accent rounded-full p-[5px] transition-all duration-300 hover:text-white"
          >
            <Icon aria-hidden />
            <span className="sr-only">{social.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
