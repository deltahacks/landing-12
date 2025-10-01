import Hero from "~/sections/Hero";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
