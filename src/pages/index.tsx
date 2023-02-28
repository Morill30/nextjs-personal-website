import Header from "@/components/Profile/Header";
import SummaryCard from "@/components/Profile/Cards/SummaryCard";
import EducationCard from "@/components/Profile/Cards/EducationCard";

export default function Home() {
  return (
    <>
      <main className={`relative flex flex-col`}>
        <Header />
        <div
          id="profile-content"
          className="pt-10 p-2 md:p-16 flex flex-wrap gap-4"
        >
          <SummaryCard />
          <EducationCard />
        </div>
      </main>
    </>
  );
}
