import Image from "next/image";

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
  const scale = index % 3 === 0 ? 240 : index % 3 === 1 ? 290 : 280;
  const translateX = index % 3 === 0 ? -2 : index % 3 === 1 ? -4 : 0;
  const translateY = index % 3 === 0 ? 1 : index % 3 === 1 ? -3 : 5;
  const image =
    index % 3 === 0
      ? "tomato.png"
      : index % 3 === 1
        ? "cheese.png"
        : "lettuce.png";
  return (
    <div className="relative h-[60px] w-[60px]">
      <div className="absolute inset-0">
        <Image
          src={`/carousel/${image}`}
          alt={image}
          fill
          style={{
            transform: `scale(${scale / 100})`,
            transformOrigin: "center",
            translate: `${translateX}px ${translateY}px`,
          }}
          className="object-contain select-none"
          priority={false}
        />
        <Image
          src={src}
          alt={fullName}
          fill
          className="rounded-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
