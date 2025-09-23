import Image from "next/image";
import { cn, type StyleWithVars } from "~/lib/utils";

export type CarouselItemProps = {
  src: string;
  fullName: string;
  isActive?: boolean;
  index: number;
  pfpSize?: number;
};

export default function CarouselItem({
  src,
  fullName,
  index,
  pfpSize = 60,
}: CarouselItemProps) {
  const components = [
    TomatoComponent,
    CheeseComponent,
    LettuceComponent,
  ] as const;
  const BackgroundComponent = components[index % 3]!;
  return (
    <div className={cn("relative", `h-[${pfpSize}px] w-[${pfpSize}px]`)}>
      <BackgroundComponent pfpSize={pfpSize} />
      <Image
        src={src}
        alt={fullName}
        fill
        className="rounded-full object-cover"
        priority={false}
      />
    </div>
  );
}

function TomatoComponent({ pfpSize }: { pfpSize: number }) {
  const scale = 2.4;
  const bgSize = pfpSize * scale;
  const translateX = -45;
  const translateY = 2;
  const wrapperStyle: StyleWithVars<"--bg"> = { "--bg": `${bgSize}px` };
  const imgStyle: StyleWithVars<"--tx" | "--ty"> = {
    "--tx": `${translateX}px`,
    "--ty": `${translateY}px`,
  };

  return (
    <div
      className={"absolute inset-0 m-auto h-[var(--bg)] w-[var(--bg)]"}
      style={wrapperStyle}
    >
      <Image
        src="/carousel/tomato.png"
        alt="tomato"
        fill
        className={
          "translate-x-[var(--tx)] translate-y-[var(--ty)] object-contain select-none"
        }
        style={imgStyle}
        priority={false}
      />
    </div>
  );
}

function CheeseComponent({ pfpSize }: { pfpSize: number }) {
  const scale = 2.9;
  const bgSize = pfpSize * scale;
  const translateX = -60;
  const translateY = -3;
  const wrapperStyle: StyleWithVars<"--bg"> = { "--bg": `${bgSize}px` };
  const imgStyle: StyleWithVars<"--tx" | "--ty"> = {
    "--tx": `${translateX}px`,
    "--ty": `${translateY}px`,
  };
  return (
    <div
      className="absolute inset-0 m-auto h-[var(--bg)] w-[var(--bg)]"
      style={wrapperStyle}
    >
      <Image
        src="/carousel/cheese.png"
        alt="cheese"
        fill
        sizes={`${bgSize}px`}
        className="origin-center translate-x-[var(--tx)] translate-y-[var(--ty)] scale-[var(--s)] object-contain select-none"
        style={imgStyle}
        priority={false}
      />
    </div>
  );
}

function LettuceComponent({ pfpSize }: { pfpSize: number }) {
  const scale = 2.8;
  const translateX = -55;
  const translateY = 5;
  const bgSize = pfpSize * scale;
  const wrapperStyle: StyleWithVars<"--bg"> = { "--bg": `${bgSize}px` };
  const imgStyle: StyleWithVars<"--tx" | "--ty"> = {
    "--tx": `${translateX}px`,
    "--ty": `${translateY}px`,
  };
  return (
    <div
      className="absolute inset-0 m-auto h-[var(--bg)] w-[var(--bg)]"
      style={wrapperStyle}
    >
      <Image
        src="/carousel/lettuce.png"
        alt="lettuce"
        fill
        sizes={`${bgSize}px`}
        className="origin-center translate-x-[var(--tx)] translate-y-[var(--ty)] scale-[var(--s)] object-contain select-none"
        style={imgStyle}
        priority={false}
      />
    </div>
  );
}
