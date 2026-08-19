"use client";

import { useCallback, useState } from "react";
import Header from "./Header";
import Drawer from "./Drawer";

/** Owns the one piece of state the header and drawer share. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const open = useCallback(() => setMenuOpen(true), []);
  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <Header onOpenMenu={open} />
      <Drawer open={menuOpen} onClose={close} />
      {children}
    </>
  );
}
