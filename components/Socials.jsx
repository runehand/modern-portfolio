import Link from "next/link";

import { RiGithubLine } from "react-icons/ri";

export const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/runehand",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="bg-accent rounded-full p-[5px] transition-all duration-300 hover:text-white"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
