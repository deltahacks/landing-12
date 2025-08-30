import Link from "next/link";
import Carousel from "~/components/TeamCarousel";
import { Separator } from "~/components/ui/separator";
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFF7E3] py-10 text-[#766060]">
      <p className="text-md text-center text-sm font-medium">
        Made with ❤️ from the DeltaHacks Team
      </p>
      <Carousel />
      <div className="flex w-full flex-col items-stretch justify-center px-3.5 md:px-44">
        <Separator className="bg-black" />
        <div className="flex w-full flex-col items-center gap-2 pt-6 md:flex-row md:justify-between md:gap-0">
          <div className="flex flex-wrap items-center justify-between gap-5 text-xs font-normal md:justify-start md:gap-6 md:text-sm">
            <Link href="">Code of Conduct</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Travel Guidelines</Link>
          </div>
          <p className="text-center text-sm font-normal md:text-right">
            @ Copyright 2024 DeltaHacks
          </p>
        </div>
      </div>
    </div>
  );
}
