"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";
//import '@excalidraw/excalidraw/index.css';

const WhiteBoard: React.FC = () => {
  console.info(convertToExcalidrawElements([{
    type: "rectangle",
    id: "rect-1",
    width: 186.47265625,
    height: 141.9765625,
    x: 0,
    y: 0,
  },]));
  return (
    <div style={{height:"700px", width:"100%"}}>
      <Excalidraw />
    </div>
  );
};
export default WhiteBoard;