import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function ProfileHeader() {
  return (
    <header>
      <div
        className={`${styles.fullWidth} relative rounded-lg animate-border inline-block bg-white from-blue-500 via-green-500 to-blue-100 bg-[length:400%_400%] p-0.5 bg-gradient-to-r`}
      >
        <div className="block text-white bg-slate-900 w-full h-56 relative rounded-lg overflow-hidden">
          <Image
            className="relative object-cover transform transition duration-500 hover:scale-110 blur-sm"
            src={"/auroral-forest.jpeg"}
            fill
            style={{ objectFit: "cover" }}
            alt="Background image"
          />
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-start -mt-16 md:pl-16">
        <div className="flex md:flex-row flex-col items-center">
          <div className="w-56 h-56 relative rounded-full border-4 border-white">
            <Image
              className="red object-cover w-5 rounded-full cursor-pointer"
              src={"/jean-avatar.jpeg"}
              fill
              style={{ objectFit: "cover" }}
              alt="Background image"
              onClick={() =>
                window.alert("Will show a preview photo when clicked soon!")
              }
            />
          </div>
          <div className="flex flex-col ml-6">
            <span className="font-bold text-[20px] text-gray-700">
              Jean Morillo
            </span>
            <span className="font-normal text-[14px] text-gray-500">
              I&apos;m a Software Engineer in Puerto Rico
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
