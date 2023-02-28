import Card from "./Card";
import Icons from "@/styles/icons/Icons";

export default function EducationCard() {
  return (
    <Card>
      <>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
          <Icons type="Education" className="mr-2" />
          Education
        </h5>
        <span className="mb-2 text-lg font-bold tracking-tight text-gray-600 dark:text-white">
          Bachelor of Science in Computer Engineering
        </span>
      </>
    </Card>
  );
}
