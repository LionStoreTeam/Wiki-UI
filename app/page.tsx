import HowWikiUI from "./pages/(home_sections)/How_Wiki";
import Welcome from "./pages/(home_sections)/Welcome";

export default function Home() {
  return (
    <main className="max-h-full flex flex-col items-center text-center">
      <Welcome />
      <HowWikiUI />
    </main>
  )
}
