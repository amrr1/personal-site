import { AnimatedMascot } from "@/components/shared/AnimatedMascot";
import { Background } from "@/components/shared/Background";

export function DesktopBackground() {
  return (
    <>
      <Background />
      <AnimatedMascot
        src="/mascots/star.svg"
        alt="Star mascot"
        className="absolute left-[8%] top-[10%]"
      />
      <AnimatedMascot
        src="/mascots/cat headphone placeholder.png"
        alt="Cat with headphones mascot"
        className="absolute bottom-[4%] right-[6%]"
      />
    </>
  );
}
