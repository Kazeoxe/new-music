import Image from "next/image";
import Countdown from "./components/Countdown";
import SliderSection from "./components/SliderSection";
import SongButton from "./components/SongButton";
import TVNoise from "./components/TVNoise";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16">
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen uppercase">
        <div className="col-span-1 md:col-span-4 p-4 bg-white">
          <div className="flex flex-col justify-center h-full mx-auto max-w-sm md:max-w-none text-black">
            <div className="mb-10">
              <h1 className="font-anton text-4xl md:text-6xl lg:text-[8.25rem] xs:leading-10  md:leading-[8rem]">
                Creepy Nuts
              </h1>
              <h2 className="text-lg md:text-[1.25rem]">DJ松永 / R-指定</h2>
            </div>
            <p className="text-sm md:text-[0.75rem] max-w-[16.25rem] mb-6">
              This is the first actuality of the group Quisque magna sem,
              sagittis at ultricies in, rutrummauris. Nullam non vulputate
              purus. Phasellus facilisis ultrices mi, at molestie est egestas
              in.
            </p>
            <Countdown targetDate="2025-06-27T19:00:00" />
          </div>
        </div>
        <div className="col-span-8 grid p-16 w-full bg-red-500">
          <div
            className="w-full grid place-items-center gap-12"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100% / 1, max(200px, 100% / 4)), 1fr))",
            }}
          >
            {[
              {
                number: "01",
                name: "Otonoke",
                image: "/CreepyNuts/covers/1.png",
              },
              {
                number: "02",
                name: "Bling-Bang-Bang-Born",
                image: "/CreepyNuts/covers/2.png",
              },
              {
                number: "03",
                name: "堕天",
                image: "/CreepyNuts/covers/3.jpg",
              },
              {
                number: "04",
                name: "のびしろ",
                image: "/CreepyNuts/covers/4.jpg",
              },
              {
                number: "05",
                name: "UNSET",
                image: "/CreepyNuts/covers/transparent.png",
              },
              {
                number: "06",
                name: "UNSET",
                image: "/CreepyNuts/covers/transparent.png",
              },
              {
                number: "07",
                name: "UNSET",
                image: "/CreepyNuts/covers/transparent.png",
              },
              {
                number: "08",
                name: "UNSET",
                image: "/CreepyNuts/covers/transparent.png",
              },
              {
                number: "09",
                name: "UNSET",
                image: "/CreepyNuts/covers/transparent.png",
              },
            ].map((song) => (
              <SongButton
                key={song.number}
                imageUrl={song.image}
                songNumber={song.number}
                songName={song.name}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-[540px] p-4 md:p-8">
        <div className="relative z-10">
          <h2 className="font-trash-secret text-4xl md:text-6xl lg:text-[5.5rem] leading-tight md:leading-[6.75rem] mt-16 mb-8">
            World Tour
          </h2>
          <ul className="space-y-4">
            {[
              { date: "06/27/2025", city: "東京 (Tokyo)", time: "19:00" },
              { date: "06/30/2025", city: "서울 (Seoul)", time: "20:00" },
              { date: "07/07/2025", city: "London", time: "19:00" },
              { date: "07/15/2025", city: "Los Angeles", time: "18:00" },
            ].map((event, index) => (
              <li
                key={index}
                className="text-xs flex flex-col sm:flex-row sm:justify-between"
              >
                <span>[{event.date}]</span>
                <div className="flex justify-between sm:gap-4">
                  <span>{event.city}</span>
                  <span>{event.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-0 z-0">
          <TVNoise />
        </div>
      </section>
      <section className="w-full overflow-x-hidden">
        <SliderSection />
      </section>
    </div>
  );
}
