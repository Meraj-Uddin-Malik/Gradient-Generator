import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("Linear");
  const [gradients, setGradients] = useState([]);

  const getHexColor = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    const int = Math.floor(random);
    const hexCode = int.toString(16).padEnd(6, "0");
    const colorHex = "#" + hexCode;
    return colorHex;
  };

  const generateGradients = () => {
    const colors = [];

    for (let i = 0; i < num; i++) {
      const color1 = getHexColor();
      const color2 = getHexColor();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`;

      if (type === "Linear") {
        colors.push({
          gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`,
          css: `background: linear-gradient(${degreeString}, ${color1}, ${color2});`,
        });
      } else {
        colors.push({
          gradient: `radial-gradient(circle, ${color1}, ${color2})`,
          css: `background: radial-gradient(circle, ${color1}, ${color2});`,
        });
      }
    }

    setGradients(colors);
  };

  const onCopy = (css) => {
    navigator.clipboard.writeText(css);
    toast.success("CSS Copied to Clipboard!", { position: "bottom-right" });
  };

  useEffect(() => {
    generateGradients();
  }, [num, type]);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">🟧 Gradient Generator</h1>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={num}
              className="border border-slate-300 bg-white rounded-lg w-25 p-2 placeholder-gray-400"
              placeholder="12"
              onChange={(e) => setNum(Number(e.target.value))}
            />

            <select
              value={type}
              className="border border-slate-300 rounded-lg p-2 w-full sm:w-24"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Linear">Linear</option>
              <option value="Radial">Radial</option>
            </select>
            <button
              className="w-full sm:w-auto px-8 py-2 bg-rose-500 text-white rounded-lg font-medium"
              onClick={generateGradients}
            >
              Generate
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gradients.map((item, index) => (
            <div
              key={index}
              className="h-40 rounded-lg relative"
              style={{ background: item.gradient }}
            >
              <button
                className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 py-1 px-2 text-[10px]"
                onClick={() => onCopy(item.css)}
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
