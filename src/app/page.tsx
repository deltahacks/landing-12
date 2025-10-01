import Hero from "~/sections/Hero";
import { posthogServerClient } from "~/lib/posthog";
import AboutUs from "~/sections/AboutUs";
import ReachOutToUs from "~/sections/ReachOutToUs";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <>
      <ReachOutToUs />
    </>
  );
}
