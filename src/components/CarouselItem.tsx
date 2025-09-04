import Image from "next/image";
import { cn } from "~/lib/utils";

export type CarouselItemProps = {
  src: string;
  fullName: string;
  isActive?: boolean;
  index: number;
};

export default function CarouselItem({
  src,
  fullName,
  index,
}: CarouselItemProps) {
  // tomato, cheese, lettuce, tomato, cheese, letus...`
  const image =
    index % 3 === 0
      ? "tomato.png"
      : index % 3 === 1
        ? "cheese.png"
        : "lettuce.png";
  const scaleClass =
    index % 3 === 0
      ? "scale-[2.4]"
      : index % 3 === 1
        ? "scale-[2.9]"
        : "scale-[2.8]";
  const translateClass =
    index % 3 === 0
      ? "-translate-x-[2px] translate-y-[1px]"
      : index % 3 === 1
        ? "-translate-x-[4px] -translate-y-[3px]"
        : "translate-y-[5px]";
  const pfpSizePx = 60;
  return (
    <div className="relative h-[60px] w-[60px]">
      <div className="absolute inset-0">
        <Image
          src={`/carousel/${image}`}
          alt={image}
          fill
          sizes={`${pfpSizePx * (index % 3 === 0 ? 2.4 : index % 3 === 1 ? 2.9 : 2.8)}px`} // 60px * scale
          className={cn(
            "origin-center object-contain select-none",
            scaleClass,
            translateClass,
          )}
          priority={false}
        />
        <Image
          src={src}
          alt={fullName}
          fill
          sizes={`${pfpSizePx}px`}
          className="rounded-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
