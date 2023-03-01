import Header from "@/components/Profile/Header";
import SummaryCard from "@/components/Profile/Cards/SummaryCard";
import SkillsCard from "@/components/Profile/Cards/SkillsCard";

export default function Home() {
  return (
    <>
      <main className={`relative flex flex-col`}>
        <Header />
        <div
          id="profile-content"
          className="px-2 md:px-16 flex flex-wrap gap-4 py-10"
        >
          <SummaryCard />
          <SkillsCard />
        </div>
      </main>
    </>
  );
}
