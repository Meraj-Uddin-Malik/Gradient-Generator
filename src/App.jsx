import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("Linear");

  const getHexColor = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    const int = Math.floor(random);
    const hexCode = int.toString(16).padEnd(6, "0");
    const colorHex = "#" + hexCode;
    return colorHex;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="w-9/12 mx-auto space-y-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">
            🟧 Gradient Generator - ({num}) ({type})
          </h1>
          <div className="flex gap-4">
            <input
              value={num}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2 placeholder-gray-400"
              placeholder="12"
              onChange={(e) => setNum(Number(e.target.value))}
            />

            <select
              value={type}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Linear">Linear</option>
              <option value="Radial">Radial</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div
            className="h-45 bg-red-500 rounded-lg relative"
            style={{ background: getHexColor() }}
          >
            <button className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 py-1 px-2 text-[10px]">
              Copy
            </button>
          </div>

          <div
            className="h-45 bg-red-500 rounded-lg relative"
            style={{ background: getHexColor() }}
          >
            <button className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 py-1 px-2 text-[10px]">
              Copy
            </button>
          </div>


          <div
            className="h-45 bg-red-500 rounded-lg relative"
            style={{ background: getHexColor() }}
          >
            <button className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 py-1 px-2 text-[10px]">
              Copy
            </button>
          </div>


          <div
            className="h-45 bg-red-500 rounded-lg relative"
            style={{ background: getHexColor() }}
          >
            <button className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 py-1 px-2 text-[10px]">
              Copy
            </button>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default App;
