import { useState } from "react";
function App() {
  const [color, setcolor] = useState("purple");
  return (
    <>
      <div
        className="w-screen h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-2 px-2  ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1  text-white rounded-full shadow-lg bg-gray-500 border-2 border-black"
              onClick={() => setcolor("gray")}
              type="button"
            >
              Gray
            </button>
            <button
              className="outline-none px-4 py-1  text-white rounded-full shadow-lg bg-white border-2 border-black text-black"
              onClick={() => setcolor("white")}
              type="button"
            >
              White
            </button>
            <button
              className="outline-none px-4 py-1  text-white rounded-full shadow-lg bg-green-500 border-2 border-black"
              onClick={() => setcolor("green")}
              type="button"
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1  text-white rounded-full shadow-lg bg-red-500 border-2 border-black"
              onClick={() => setcolor("red")}
              type="button"
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1  text-white rounded-full shadow-lg bg-black border-2 border-black"
              onClick={() => setcolor("black")}
              type="button"
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1  text-white rounded-full shadow-lg bg-yellow-500 border-2 border-black"
              onClick={() => setcolor("yellow")}
              type="button"
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
