import Link from "next/link";

import {
  RiGithubLine,
  RiMailLine,
  RiTelegramLine,
} from "react-icons/ri";
import { socialLinks } from "../data/profile";

const iconMap = {
  github: RiGithubLine,
  email: RiMailLine,
  telegram: RiTelegramLine,
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
