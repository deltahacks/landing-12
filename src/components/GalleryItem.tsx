import Image from "next/image";
import useEmblaCarousel, {
  type EmblaViewportRefType,
} from "embla-carousel-react";
import gallery from "~/assets/gallery/gallery.json";
import type { EmblaCarouselType } from "embla-carousel";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { cn } from "~/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const components = [DH9, DH10, DH11] as const;

export default function GalleryItem({ index }: { index: number }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      startIndex: 0,
      align: "center",
      axis: "x",
      loop: true,
      watchDrag: false,
      active: true,
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  const BackgroundComponent = components[index % components.length]!;
  return (
    <div className="h-[27.17rem] w-[21.5rem]">
      <BackgroundComponent emblaRef={emblaRef} emblaApi={emblaApi} />
    </div>
  );
}

function DH9({
  emblaRef,
  emblaApi,
}: {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
}) {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const [isInside, setIsInside] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsInside(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInside(false);
  }, []);

  return (
    <div className="bg-dh-orange relative overflow-hidden rounded-4xl px-6 pt-28 pb-9 shadow-[0_3.6px_3.6px_0_rgba(0,0,0,0.25)]">
      <Image
        src="/galleryPics/Headers/dh9.svg"
        alt="DH9"
        width={1000}
        height={1000}
        className="absolute -top-38 -left-22 h-full w-full scale-[0.9] object-cover"
      />
      <div
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="overflow-hidden rounded-4xl"
      >
        <div className="flex touch-pan-y">
          {gallery.DH9.map((src, i) => (
            <div key={i} className="shrink-0 grow-0 basis-full">
              <Image
                src={`/galleryPics/DH9/${src}`}
                alt={`DH9 ${i + 1}`}
                width={1000}
                height={1000}
                className="h-[17.66rem] w-[18.73rem] object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className={cn(
            "absolute top-1/2 -left-2 z-10 -translate-y-2/12",
            isInside ? "opacity-75" : "opacity-0",
          )}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div
          className={cn(
            "absolute top-1/2 right-0 z-10 -translate-y-2/12",
            isInside ? "opacity-75" : "opacity-0",
          )}
        >
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}

function DH10({
  emblaRef,
  emblaApi,
}: {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
}) {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const [isInside, setIsInside] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsInside(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInside(false);
  }, []);

  return (
    <div className="bg-dh-orange relative rounded-4xl px-6 pt-28 pb-9 shadow-[0_3.6px_3.6px_0_rgba(0,0,0,0.25)]">
      <Image
        src="/galleryPics/Headers/dh10.svg"
        alt="DH10"
        width={1000}
        height={1000}
        className="absolute -top-40 -left-[4.5rem] h-full w-full scale-[0.6] object-fill"
      />
      <div
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="overflow-hidden rounded-4xl"
      >
        <div className="flex touch-pan-y">
          {gallery.DH10.map((src, i) => (
            <div key={i} className="shrink-0 grow-0 basis-full">
              <Image
                src={`/galleryPics/DH10/${src}`}
                alt={`DH10 ${i + 1}`}
                width={1000}
                height={1000}
                className="h-[17.66rem] w-[18.73rem] object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className={cn(
            "absolute top-1/2 -left-2 z-10 -translate-y-2/12",
            isInside ? "opacity-75" : "opacity-0",
          )}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div
          className={cn(
            "absolute top-1/2 right-0 z-10 -translate-y-2/12",
            isInside ? "opacity-75" : "opacity-0",
          )}
        >
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}

function DH11({
  emblaRef,
  emblaApi,
}: {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
}) {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const [isInside, setIsInside] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsInside(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInside(false);
  }, []);

  return (
    <div className="bg-dh-orange relative rounded-4xl px-6 pt-28 pb-9 shadow-[0_3.6px_3.6px_0_rgba(0,0,0,0.25)]">
      <Image
        src="/galleryPics/Headers/dh11.svg"
        alt="DH11"
        width={1000}
        height={1000}
        className="absolute -top-42 -left-20 h-full w-full scale-[0.8] object-fill"
      />
      <div
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="overflow-hidden rounded-4xl"
      >
        <div className="flex touch-pan-y">
          {gallery.DH11.map((src, i) => (
            <div key={i} className="shrink-0 grow-0 basis-full">
              <Image
                src={`/galleryPics/DH11/${src}`}
                alt={`DH11 ${i + 1}`}
                width={1000}
                height={1000}
                className="h-[17.66rem] w-[18.73rem] object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className={cn(
            "absolute top-1/2 -left-2 z-10 -translate-y-2/12",
            isInside ? "opacity-75" : "opacity-0",
          )}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div
          className={cn(
            "absolute top-1/2 right-0 z-10 -translate-y-2/12",
            isInside ? "opacity-75" : "opacity-0",
          )}
        >
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

function usePrevNextButtons(
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

type PropType = React.ComponentPropsWithRef<"button">;

function PrevButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    <button className="" type="button" {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="size-28 scale-x-50 scale-y-150"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      {children}
    </button>
  );
}

function NextButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    <button className="" type="button" {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="size-28 scale-x-50 scale-y-150"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>

      {children}
    </button>
  );
}
