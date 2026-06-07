type Cell = "S" | "M" | null;

type TangoPuzzle = {
  n: number;
  cellData: Cell[][];
};

type TangoDBType = {
  [level: string]: TangoPuzzle;
};

export const TANGO_DB: TangoDBType = {
  "608": {
    n: 6,
    cellData: [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, "S", "M", null, null],
      [null, null, null, "S", "S", null],
      [null, null, null, null, "S", "M"],
    ],
  },
};
