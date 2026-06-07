import Image from "next/image";

import Sun from "@/app/assets/sun.svg";
import Moon from "@/app/assets/moon.svg";
import { TANGO_DB } from "@/data/tango";

type TangoBoardProps = {
  level: string;
};

const TangoBoard = ({ level }: TangoBoardProps) => {
  const tangoData = TANGO_DB[level];
  console.log(tangoData);
  console.log(level);
  const { cellData: prefilled } = tangoData;

  return (
    <div className="flex justify-center">
      <div className="">
        <div id="tango-container">
          {prefilled.map((row, rowIndex) => {
            return (
              <div className="flex" key={rowIndex}>
                {row.map((cellData, colIndex) => {
                  if (cellData === null) {
                    return (
                      <div
                        className="bg-white border-1 border-[#eeebe7] h-[83px] w-[83px] flex items-center justify-center"
                        key={colIndex}
                      ></div>
                    );
                  }
                  return (
                    <div
                      className="bg-[#eeebe7] border-1 h-[83px] w-[83px] flex items-center justify-center"
                      key={colIndex}
                    >
                      {cellData === "S" ? (
                        <Image
                          src={Sun}
                          width={40}
                          height={40}
                          alt="Sun Image"
                        />
                      ) : (
                        <Image
                          src={Moon}
                          width={40}
                          height={40}
                          alt="Moon Image"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TangoBoard;
