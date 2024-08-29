import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold">Background Color Changer</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setBgColor("White")} 
            className="p-2 bg-cyan-500 text-black rounded">
            White
          </button>
          <button 
            onClick={() => setBgColor("red")} 
            className="p-2 bg-red-500 text-white rounded">
            Red
          </button>
          <button 
            onClick={() => setBgColor("green")} 
            className="p-2 bg-green-500 text-white rounded">
            Green
          </button>
          <button 
            onClick={() => setBgColor("blue")} 
            className="p-2 bg-blue-500 text-white rounded">
            Blue
          </button>
          <button 
            onClick={() => setBgColor("yellow")} 
            className="p-2 bg-yellow-500 text-black rounded">
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
