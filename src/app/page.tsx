import Hero from "~/sections/Hero";
import { posthogServerClient } from "~/lib/posthog";
import FAQ from "~/sections/FAQ";
import Speakers from "~/sections/Speakers";
import Sponsors from "~/sections/Sponsors";
import About from "~/sections/AboutUs";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <>
      <Hero />
      <div className="flex h-[50vh] items-center justify-center bg-lime-500">
        Sample Section
      </div>
      {/* <About /> */}
      {/*<Speakers />
      <Sponsors />
      <FAQ /> */}
    </>
  );
}
