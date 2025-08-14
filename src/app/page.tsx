import Link from "next/link";
import FAQ from "~/sections/FAQ";

export default function HomePage() {

  return (
    <div className="relative">

      <main className="flex h-full w-full flex-col gap-24 overflow-hidden">
        <div className="fixed z-50 box-content w-[80%]">
        </div>
        <FAQ />
      </main>

      <div className="absolute top-0 -z-50 h-full w-full bg-[#fff4b4]" />
    </div>
  );
}
