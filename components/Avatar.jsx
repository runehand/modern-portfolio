import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/profile/about-me-no-background.png"
        alt="Harry Lim portrait"
        width={408}
        height={533}
        className="translate-z-0 h-full w-full object-contain object-bottom"
        priority
      />
    </div>
  );
};

export default Avatar;
