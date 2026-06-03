"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { X } from "lucide-react";

type SudokuBoardProps = { level: string };

type Cell = {
  value: number | null;
  isFixed: boolean;
};

const SudokuBoard = ({ level }: SudokuBoardProps) => {
  // Initialize a sample 6x6 sudoku puzzle
  const initialBoard: Cell[][] = [
    [
      { value: 1, isFixed: true },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: 2, isFixed: true },
      { value: null, isFixed: false },
    ],
    [
      { value: null, isFixed: false },
      { value: 3, isFixed: true },
      { value: null, isFixed: false },
      { value: 4, isFixed: true },
      { value: null, isFixed: false },
      { value: 5, isFixed: true },
    ],
    [
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: 2, isFixed: true },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
    ],
    [
      { value: 3, isFixed: true },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: 1, isFixed: true },
      { value: null, isFixed: false },
    ],
    [
      { value: null, isFixed: false },
      { value: 4, isFixed: true },
      { value: null, isFixed: false },
      { value: 5, isFixed: true },
      { value: null, isFixed: false },
      { value: 6, isFixed: true },
    ],
    [
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: 6, isFixed: true },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
      { value: null, isFixed: false },
    ],
  ];

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
                      ${isSelected ? "bg-yellow-300 ring-2 ring-yellow-500" : ""}
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

        {/* Number Pad */}
        <div className="mb-6">
          {/* <p className="text-center text-gray-700 font-semibold mb-3">
            {selectedCell ? "Select a number" : "Click on a cell"}
          </p> */}
          <div className="grid grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="bg-white font-bold py-3 px-4 rounded-lg transition-colors bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleClear}
            className="bg-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={handleReset}
            className="bg-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SudokuBoard;
