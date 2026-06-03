import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import SudokuBoard from "@/components/games/SudokuBoard";

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
    case "mini-sudoku":
      return <SudokuBoard level={level} />;
    case "2":
      return <div>Level 2</div>;
    default:
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
          href="/"
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
