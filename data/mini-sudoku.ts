type SudokuValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;

type Cell = {
  value: SudokuValue;
  isFixed: boolean;
};

type SudokuType = {
  cellData: Cell[][];
};

type SudokuBoardType = {
  [level: string]: SudokuType;
};
export const MINISUDOKU_DB: SudokuBoardType = {
  "300": {
    cellData: [
      [
        { value: 1, isFixed: true },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: 5, isFixed: true },
        { value: null, isFixed: false },
      ],
      [
        { value: null, isFixed: false },
        { value: 2, isFixed: true },
        { value: null, isFixed: false },
        { value: 4, isFixed: true },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
      ],
      [
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: 3, isFixed: true },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
      ],
      [
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: 1, isFixed: true },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
      ],
      [
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: 2, isFixed: true },
        { value: null, isFixed: false },
        { value: 4, isFixed: true },
        { value: null, isFixed: false },
      ],
      [
        { value: null, isFixed: false },
        { value: 5, isFixed: true },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: null, isFixed: false },
        { value: 6, isFixed: true },
      ],
    ],
  },
};
