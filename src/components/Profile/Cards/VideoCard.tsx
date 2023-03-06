import Icons from "@/styles/icons/Icons";
import Image from "next/image";

export default function VideoCard({
  iconType = "Docker",
  title = "Docker Tutorial",
  href = "https://youtu.be/pTFZFxd4hOI",
  thumbnail = "/docker-image.jpeg",
  alt = "Recomendation video",
}: {
  iconType: string;
  title: string;
  href: string;
  thumbnail: string;
  alt?: string;
}) {
  return (
    <div className="relative box-border h-72 mr-10  rounded-sm  shadow-md overflow-hidden">
      <a href={href} target="_blank">
        <Image
          src={thumbnail}
          fill
          alt={alt}
          style={{ objectFit: "cover" }}
          className="transform transition duration-500 hover:scale-110"
        />
      </a>
      <div className="absolute flex items-center justify-between p-5 w-full h-20 top-full -mt-20 left-0 backdrop-blur-md bg-white/30 z-10">
        <span className="text-white font-bold flex items-center w-min">
          <Icons type={iconType} className=" flex-shrink-0" />
          <span className="text-ellipsis overflow-hidden whitespace-nowrap w-[150px] md:w-full">
            {title}
          </span>
        </span>
        <Icons type="up-right-arrow" className="fill-slate-100"></Icons>
      </div>
    </div>
  );
}
