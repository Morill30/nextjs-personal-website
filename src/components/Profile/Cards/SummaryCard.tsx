import Card from "./Card";
import Icons from "@/styles/icons/Icons";

export default function SummaryCard() {
  return (
    <Card>
      <>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
          Summary
          <Icons type="Summary" className="ml-2" />
        </h5>
        <ul className="font-normal text-gray-700 dark:text-gray-400">
          <li className="pt-2">
            <b>3+ years</b> of experience facilitating cutting-edge engineering
            solutions with a wide range of web application and technology
            skills.
          </li>
          <li className="pt-2">
            Proven ability to leverage <b>full-stack</b> knowledge and
            experience to build interactive and user- centered website designs
            to scale.
          </li>
          <li className="pt-2">
            <b>Extensive expertise</b> in large system architecture development
            and administration, as well as network design and configuration.
          </li>
        </ul>
      </>
    </Card>
  );
}
