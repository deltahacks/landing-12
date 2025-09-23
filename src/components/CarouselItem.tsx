import Image from "next/image";
import { cn } from "~/lib/utils";

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
    <div className={`relative h-[${pfpSize}px] w-[${pfpSize}px]`}>
      <div className="absolute inset-0">
        <BackgroundComponent pfpSize={pfpSize} />
        <Image
          src={src}
          alt={fullName}
          fill
          sizes={`${pfpSize}px`}
          className="rounded-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}

function TomatoComponent({ pfpSize }: { pfpSize: number }) {
  const scale = 2.4;
  const translateX = -2;
  const translateY = 1;
  const bgSize = pfpSize * scale;
  return (
    <Image
      src="/carousel/tomato.png"
      alt="tomato"
      fill
      sizes={`${bgSize}px`}
      className={cn(
        "origin-center object-contain select-none",
        `scale-[${scale}]`,
        `-translate-x-[${Math.abs(translateX)}px] translate-y-[${translateY}px]`,
      )}
      priority={false}
    />
  );
}

function CheeseComponent({ pfpSize }: { pfpSize: number }) {
  const scale = 2.9;
  const translateX = -4;
  const translateY = -3;
  const bgSize = pfpSize * scale;
  return (
    <Image
      src="/carousel/cheese.png"
      alt="cheese"
      fill
      sizes={`${bgSize}px`}
      className={cn(
        "origin-center object-contain select-none",
        `scale-[${scale}]`,
        `-translate-x-[${Math.abs(translateX)}px] -translate-y-[${Math.abs(translateY)}px]`,
      )}
      priority={false}
    />
  );
}

function LettuceComponent({ pfpSize }: { pfpSize: number }) {
  const scale = 2.8;
  const translateY = 5;
  const bgSize = pfpSize * scale;
  return (
    <Image
      src="/carousel/lettuce.png"
      alt="lettuce"
      fill
      sizes={`${bgSize}px`}
      className={cn(
        "origin-center object-contain select-none",
        `scale-[${scale}]`,
        `translate-y-[${translateY}px]`,
      )}
      priority={false}
    />
  );
}
