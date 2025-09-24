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
  const components = [
    TomatoComponent,
    CheeseComponent,
    LettuceComponent,
  ] as const;

  const BackgroundComponent = components[index % components.length]!;

  return (
    <div className="grid size-24 grid-cols-1 grid-rows-1">
      <div className="z-10 aspect-square p-4.5">
        <Image
          src={src}
          alt={fullName}
          width={256}
          height={256}
          className="aspect-square rounded-full object-cover"
          priority={false}
        />
      </div>
      <BackgroundComponent />
    </div>
  );
}

function TomatoComponent() {
  return (
    <Image
      src="/carousel/tomato.png"
      alt="tomato"
      width={255}
      height={255}
      className="scale-[150%] object-contain select-none"
      priority={false}
    />
  );
}

function CheeseComponent() {
  return (
    <Image
      src="/carousel/cheese.png"
      alt="cheese"
      width={255}
      height={255}
      className="origin-[55_58%] scale-175 object-contain select-none"
      priority={false}
    />
  );
}

function LettuceComponent() {
  return (
    <Image
      src="/carousel/lettuce.png"
      alt="lettuce"
      width={255}
      height={255}
      className="origin-center scale-175 object-contain select-none"
      priority={false}
    />
  );
}
