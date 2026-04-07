import React from "react";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export function Header() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}
