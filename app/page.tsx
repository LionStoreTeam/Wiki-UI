import Welcome from "./pages/(sections)/Welcome";

export default function Home() {
  return (
    <main className="h-[calc(100vh - 4rem)] px-10 flex flex-col justify-start items-center">
      <Welcome />
    </main>
  )
}
