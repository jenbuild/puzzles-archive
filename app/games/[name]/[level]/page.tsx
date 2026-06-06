import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import SudokuBoard from "@/components/games/SudokuBoard";
import TangoBoard from "@/components/games/TangoBoard";
import PatchesBoard from "@/components/games/PatchesBoard";
import ZipBoard from "@/components/games/ZipBoard";
import QueensBoard from "@/components/games/QueensBoard";
import PinpointBoard from "@/components/games/Pinpoint";
import CrossclimbBoard from "@/components/games/CrossclimbBoard";

type GamePageProps = {
  params: Promise<{
    name: string;
    level: string;
  }>;
};

type GameBoardProps = {
  name: string;
  level: string;
};

const GameBoard = ({ name, level }: GameBoardProps) => {
  switch (name) {
    case "patches":
      return <PatchesBoard level={level} />;
    case "zip":
      return <ZipBoard level={level} />;
    case "mini-sudoku":
      return <SudokuBoard level={level} />;
    case "tango":
      return <TangoBoard level={level} />;
    case "queens":
      return <QueensBoard level={level} />;
    case "pinpoint":
      return <PinpointBoard level={level} />;
    case "crossclimb":
      return <CrossclimbBoard level={level} />;
    default:
      // Add Error Route Page here
      return <div>Level {level}</div>;
  }
};

const GameLevel = async ({ params }: GamePageProps) => {
  const { name, level } = await params;
  console.log(name);

  return (
    <div className="min-h-screen md:min-w-[600px] md:max-w-4xl md:mx-auto flex flex-col p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <Link
          href={`/games/${name}/`}
          className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-6xl font-bold">#{level}</h1>
        <div className="w-6"></div>
      </div>

      {/* GameBoard component will render the appropriate game based on the name and level */}
      <GameBoard name={name} level={level} />
    </div>
  );
};

export default GameLevel;
