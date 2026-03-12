import Image from "next/image";

const Circles = ({ fixed = false, className = "" }) => {
  const positionClass = fixed ? "fixed" : "absolute";

  return (
    <div
      className={`w-[200px] xl:w-[300px] ${positionClass} -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 ${className}`}
    >
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
