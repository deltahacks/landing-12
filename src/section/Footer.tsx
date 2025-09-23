import Link from "next/link";
import Carousel from "~/components/Carousel";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-md pb-4 text-center lg:text-2xl">
        Made with ♥ from the DeltaHacks Team
      </p>
      <Carousel />
      <div className="flex w-full flex-col items-stretch justify-center px-4 sm:px-12 lg:px-28 xl:px-32">
        <div className="flex w-full flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
            <Link href="">Code of Conduct</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Travel Guidelines</Link>
          </div>
          <p className="text-center md:text-right">
            @ Copyright 2024 DeltaHacks
          </p>
        </div>
      </div>
    </div>
  );
}
