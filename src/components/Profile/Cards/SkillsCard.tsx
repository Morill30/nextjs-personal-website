import Card from "./Card";
import Icons from "@/styles/icons/Icons";
import Image from "next/image";

export default function SkillsCard() {
  return (
    <Card>
      <>
        <h5 className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
          Skills
          <Icons type="Skills" className="h-4 w-4 ml-2" />
        </h5>
        <div className="flex flex-wrap gap-3 py-3">
          <span className="border border-blue-800 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
            Docker
          </span>
          <span className="border border-gray-800 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-gray-300">
            Nginx
          </span>
          <span className="border border-red-800 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-red-900 dark:text-red-300">
            Redis
          </span>
          <span className="border border-green-800 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
            Vue
          </span>
          <span className="border border-yellow-800 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-yellow-900 dark:text-yellow-300">
            Javascript
          </span>
          <span className="border border-indigo-800 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-indigo-900 dark:text-indigo-300">
            NextJs
          </span>
          <span className="border border-purple-800 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-purple-900 dark:text-purple-300">
            PHP
          </span>
          <span className="border border-pink-800 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-pink-900 dark:text-pink-300">
            C++
          </span>
          <span className="border border-green-800 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
            NuxtJs
          </span>
          <span className="border border-indigo-800 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-indigo-900 dark:text-indigo-300">
            React
          </span>
          <span className="border border-yellow-800 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-yellow-900 dark:text-yellow-300">
            Java
          </span>
          <span className="border border-blue-800 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
            Google Cloud Platform
          </span>
          <span className="border border-green-800 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
            Kubernetes
          </span>
          <span className="border border-yellow-800 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-yellow-900 dark:text-yellow-300">
            AWS
          </span>
        </div>
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
          Location
          <Icons type="Location" className="ml-1 h-5 w-5" />
        </h5>
        <div className="mb-3">
          <a
            href="https://goo.gl/maps/5gUrZnnXzDjKZjNUA"
            target="_blank"
            className="underline flex items-center"
          >
            A place in Puerto Rico
            <Icons type="up-right-arrow" className="fill-black h-[12px] ml-2" />
          </a>
        </div>
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
          Email @
        </h5>
        <div className="mb-3">
          <a href="mailto:morillo30@gmail.com" className="flex items-center">
            morillo30@gmail.com{" "}
            <Icons type="up-right-arrow" className="fill-black h-[12px] ml-2" />
          </a>
        </div>
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
          Follow Me +
        </h5>

        <div className="flex flex-wrap gap-4 ">
          <a
            type="button"
            href="https://github.com/Morill30"
            target="_blank"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
          >
            <Icons type="Github" className="mr-2" />
            My Github Profile
          </a>
          <a
            type="button"
            href="https://www.linkedin.com/in/jean-morillo-30/"
            target="_blank"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
          >
            My Linked
            <Icons type="Linkedin" className=" h-6 w-6 fill-white" />
          </a>
        </div>
      </>
    </Card>
  );
}
