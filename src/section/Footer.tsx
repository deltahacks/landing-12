import Link from "next/link";
import Carousel from "~/components/Carousel";
import { Separator } from "~/components/ui/separator";
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFF7E3] py-10 text-[#766060]">
      <p className="text-md pb-4 text-center font-medium text-sm">
        Made with ♥ from the DeltaHacks Team
      </p>
      <Carousel />
      <div className="flex w-full flex-col items-stretch justify-center px-44">
        <Separator className="bg-black" />
        <div className="pt-6 flex w-full flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-between gap-6 md:justify-start text-sm font-normal">
            <Link href="">Code of Conduct</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Travel Guidelines</Link>
          </div>
          <p className="text-center md:text-right text-sm font-normal">
            @ Copyright 2024 DeltaHacks
          </p>
        </div>
      </div>
    </div>
  );
}
