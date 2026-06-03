import Link from "next/link";

import { gameNames } from "@/constants/gameList";
import { ChevronLeft } from "lucide-react";

type GamePageProps = {
  params: Promise<{
    name: string;
  }>;
};

type Game = {
  id: number;
  name: string;
  slug: string;
  image: string;
  startedFrom: string;
};

const GamePage = async ({ params }: GamePageProps) => {
  const { name } = await params;

  const gameData: Game =
    gameNames.find((game) => game.slug === name) || ({} as Game);

  const { name: gameName, startedFrom } = gameData;

  const startDate = new Date(startedFrom);
  const today = new Date();

  const diffInMs = today.getTime() - startDate.getTime();
  const daysSinceStart = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1; // +1 to include the start day as day 1

  const gameLevels = Array.from({ length: daysSinceStart }, (_, i) => i + 1);

  return (
    <div className="min-h-screen md:min-w-[600px] md:max-w-4xl md:mx-auto flex flex-col p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-4xl font-bold">{gameName}</h1>
        <div className="w-6"></div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gameLevels.map((level) => (
          <Link
            href={`/games/${name}/${level}`}
            key={level}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow h-[120px] flex items-center justify-center"
          >
            <h2 className="text-3xl font-semibold text-center text-gray-400">
              #{level}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
