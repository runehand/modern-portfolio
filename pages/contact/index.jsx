import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import {
  RiGithubLine,
  RiMailLine,
  RiTelegramLine,
} from "react-icons/ri";

import { contactItems, profileLinks } from "../../data/profile";
import usePortfolioPageScroll from "../../hooks/usePortfolioPageScroll";
import { fadeIn } from "../../variants";

const iconMap = {
  email: RiMailLine,
  telegram: RiTelegramLine,
  discord: FaDiscord,
  github: RiGithubLine,
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handlePageScroll = usePortfolioPageScroll();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="relative h-full overflow-x-hidden overflow-y-auto bg-primary/30"
      onScroll={handlePageScroll}
    >
      <div className="container mx-auto flex min-h-full items-center py-28 text-center xl:py-32 xl:text-left">
        <div className="grid w-full gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-accent">
              Contact
            </div>

            <div className="mb-6 flex items-center justify-center xl:justify-start">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/20 p-2">
                <Image
                  src="/profile/profile-photo.jpg"
                  alt="Harry Lim profile"
                  width={176}
                  height={176}
                  className="h-32 w-32 rounded-[22px] object-cover"
                />
              </div>
            </div>

            <h2 className="h2 mb-4">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>
            <p className="mb-8">
              Email is the best path for longer conversations. Telegram works
              well for faster follow-up, and the contact form stays here if you
              prefer sending a note directly from the site.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = iconMap[item.key];
                const content = (
                  <>
                    <div className="mb-3 text-2xl text-accent">
                      <Icon aria-hidden />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">
                      {item.value}
                    </div>
                  </>
                );

                if (item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-2xl border border-white/10 bg-black/10 p-5 transition-colors duration-300 hover:border-accent"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/10 p-5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href={profileLinks.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-[52px] items-center rounded-full border border-white/20 px-7 text-sm font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Download CV
              </Link>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-6 rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            <div className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Contact form
            </div>
            <div className="text-2xl font-semibold text-white">
              Send a message
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row">
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <button
              type="submit"
              className="btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Send message
              </span>

              <BsArrowRight
                className="absolute -translate-y-[120%] opacity-0 transition-all duration-300 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
