import { Bingo } from "../../types/types";
import BingoRow from "../Bingo/Bingo";
import { useState } from "react";
import { bingos as bingosDummy } from "../../data/data";
import './BingosTables.css'

const BingosTable = ({children}:{children:React.ReactNode}) => {
   const [bingos,setBingos] = useState<Bingo[]>([...bingosDummy.slice(0,5)])

  return (
    <div className="bingos-table px-[4rem] py-[2rem]">
      {children}
      <table className="w-full  text-sm text-left">
        <thead className="text-lg border-b border-gray-400">
          <tr>
            <th scope="col" className="py-4 font-[400] ">
              Draw Date
            </th>
            <th scope="col" className="py-4 font-[400] ">
              Association
            </th>
            <th scope="col" className="py-4 font-[400]">
              1st Price
            </th>
            <th scope="col" className="py-4 font-[400]">
              Donation
            </th>
            <th scope="col" className="py-4 font-[400]">
              Ticket Price
            </th>
            <th scope="col" className="py-4 font-[400]">
              Status
            </th>
          </tr>
        </thead>
        <tbody >
          {bingos.map((bingo:Bingo) => (
            <BingoRow bingo={bingo}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingosTable;
