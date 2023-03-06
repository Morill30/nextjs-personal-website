import TopBackgroundHeader from "@/components/TopBackgroundHeader";
import Image from "next/image";
import Icons from "@/styles/icons/Icons";

export default function Diagram() {
  return (
    <main className={`relative flex flex-col`}>
      <TopBackgroundHeader />
      <div className=" -mt-24 z-10">
        <h2 className="mb-10 font-thin tracking-wide text-md text-white flex items-center justify-center md:justify-start">
          <Icons type="aws" className="h-14 fill-orange-400 mt-3 mr-3" />
          Site Diagram
        </h2>
        <div className="w-full flex justify-center">
          <div className=" w-full h-[50vh] md:h-[80vh] bg-gray-50 relative rounded-md border-4 border-white shadow-md flex-shrink-0">
            <Image
              className="object-cover w-5 rounded-md"
              src={"/aws-diagram.png"}
              fill
              style={{ objectFit: "contain" }}
              alt="Background image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
