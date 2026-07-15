"use client";

import { Desktop } from "@/components/desktop/Desktop";
import { MobileHome } from "@/components/mobile/MobileHome";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Home() {
  const { isMobile } = useBreakpoint();

  return isMobile ? <MobileHome /> : <Desktop />;
}
