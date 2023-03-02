import Icons from "@/styles/icons/Icons";
import type { ReactElement } from "react";

export default function VideoCard({
  children,
  iconType = "Docker",
  title = "Docker Tutorial",
}: {
  children: ReactElement;
  iconType: string;
  title: string;
}) {
  return (
    <div className="relative box-border h-72 mr-10  rounded-sm  shadow-md">
      {children}
      <div className="absolute flex items-center justify-between p-5 w-full h-20 top-full -mt-20 left-0 backdrop-blur-md bg-white/30 z-10">
        <span className="text-white font-bold flex items-center">
          <Icons type={iconType} />
          {title}
        </span>
        <Icons type="up-right-arrow" className="fill-slate-400"></Icons>
      </div>
    </div>
  );
}
