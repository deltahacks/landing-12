import Hero from "~/sections/Hero";
import { posthogServerClient } from "~/lib/posthog";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
