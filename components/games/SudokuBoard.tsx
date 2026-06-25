"use client";

import { useState } from "react";
import { Delete, RotateCcw } from "lucide-react";
import { MINISUDOKU_DB } from "@/data/mini-sudoku";

type SudokuBoardProps = { level: string };

type Cell = {
  value: number | null;
  isFixed: boolean;
};

const SudokuBoard = ({ level }: SudokuBoardProps) => {
  const sudokuBoardData = MINISUDOKU_DB[level];
  const { cellData: initialBoard } = sudokuBoardData;

  const [board, setBoard] = useState<Cell[][]>(initialBoard);
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const handleCellClick = (row: number, col: number) => {
    if (!board[row][col].isFixed) {
      setSelectedCell({ row, col });
    }
  };

  const handleNumberClick = (num: number) => {
    if (selectedCell) {
      const newBoard = board.map((row) => [...row]);
      newBoard[selectedCell.row][selectedCell.col].value =
        newBoard[selectedCell.row][selectedCell.col].value === num ? null : num;
      setBoard(newBoard);
    }
  };

  const handleClear = () => {
    if (selectedCell && !board[selectedCell.row][selectedCell.col].isFixed) {
      const newBoard = board.map((row) => [...row]);
      newBoard[selectedCell.row][selectedCell.col].value = null;
      setBoard(newBoard);
    }
  };

  const handleReset = () => {
    setBoard(initialBoard.map((row) => [...row]));
    setSelectedCell(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        {/* Sudoku Grid */}
        <div className="inline-block border-3 border-black mb-8 rounded-lg">
          {board.map((row, rowIdx) => (
            <div key={rowIdx} className="flex">
              {row.map((cell, colIdx) => {
                const boxRow = Math.floor(rowIdx / 2);
                const boxCol = Math.floor(colIdx / 3);
                const isSelected =
                  selectedCell?.row === rowIdx && selectedCell?.col === colIdx;
                const boxBgColor =
                  (boxRow + boxCol) % 2 === 0
                    ? "bg-[var(--sudoku-primary)]"
                    : "bg-[var(--sudoku-secondary)]";

                return (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    onClick={() => handleCellClick(rowIdx, colIdx)}
                    className={`
                      w-16 h-16 flex items-center justify-center text-2xl font-bold cursor-pointer
                      border-1 border-gray-400
                      ${colIdx % 3 === 2 ? "border-r-1 border-r-gray-900" : ""}
                      ${rowIdx % 2 === 1 ? "border-b-1 border-b-gray-900" : ""}
                      ${boxBgColor}
                      ${isSelected ? "bg-green-300 ring-2 ring-green-500" : ""}
                      ${cell.isFixed ? "text-gray-900" : "text-blue-600"}
                      hover:bg-opacity-80 transition-all
                    `}
                  >
                    {cell.value}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Gamepad Buttons */}
        <div className="flex justify-center">
          <div className="grid grid-cols-[repeat(3,64px)_72px] gap-x-5 gap-y-5 items-center">

            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => handleNumberClick(n)}
                className="h-16 w-16 text-4xl font-semibold text-zinc-900 transition active:scale-95 cursor-pointer"
              >
                {n}
              </button>
            ))}

            <button
              onClick={handleClear}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 shadow-sm transition active:scale-95 cursor-pointer"
            >
              <Delete className="h-6 w-6" />
            </button>

            {[4, 5, 6].map((n) => (
              <button
                key={n}
                onClick={() => handleNumberClick(n)}
                className="h-16 w-16 text-4xl font-semibold text-zinc-900 transition active:scale-95 cursor-pointer"
              >
                {n}
              </button>
            ))}

            <button
              onClick={handleReset}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 shadow-sm transition active:scale-95 cursor-pointer"
            >
              <RotateCcw className="h-6 w-6" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SudokuBoard;
