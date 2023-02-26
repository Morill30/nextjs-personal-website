import SideBar from "./SideBar";
import type { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <SideBar>{children}</SideBar>
    </>
  );
}
