import { gameNames } from "@/constants/gameList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen md:max-w-4xl md:mx-auto flex flex-col p-4 sm:p-6 md:p-8">
      <h1 className="text-4xl font-bold mb-4">Puzzles Archive</h1>

      <h2 className="text-2xl font-semibold mt-4 mb-4">LinkedIn Games</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {gameNames.map((item, index) => (
          <div
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex sm:flex-col items-center gap-2"
            key={index}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={40}
              height={40}
              className="hidden sm:block"
            />
            <Image
              src={item.image}
              alt={item.name}
              width={30}
              height={30}
              className="block sm:hidden"
            />
            <p className="md:text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
