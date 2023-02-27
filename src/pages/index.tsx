import Header from "@/components/Profile/Header";

export default function Home() {
  return (
    <>
      <main className={`relative flex flex-col`}>
        <Header />
        <div
          id="profile-content"
          className="pt-10 p-2 md:p-10 flex flex-wrap gap-4"
        >
          <div className="block max-w-[600px] p-6 bg-slate-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Summary
            </h5>
            <ul className="font-normal text-gray-700 dark:text-gray-400">
              <li className="pt-2">
                <b>3+ years</b> of experience facilitating cutting-edge
                engineering solutions with a wide range of web application and
                technology skills.
              </li>
              <li className="pt-2">
                Proven ability to leverage <b>full-stack</b> knowledge and
                experience to build interactive and user- centered website
                designs to scale.
              </li>
              <li className="pt-2">
                <b>Extensive expertise</b> in large system architecture
                development and administration, as well as network design and
                configuration.
              </li>
            </ul>
          </div>
          <a
            href="#"
            className=" block max-w-sm p-6 bg-slate-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Education
            </h5>
            <span className="mb-2 text-lg font-bold tracking-tight text-gray-600 dark:text-white">
              Bachelor of Science in Computer Engineering
            </span>
          </a>
        </div>
      </main>
    </>
  );
}
