import type { ReactElement } from "react";

export default function Card({ children }: { children: ReactElement }) {
  return (
    <div className="block max-w-[600px] p-6 bg-gray-50 border border-gray-200 rounded-sm  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {children}
    </div>
  );
}
