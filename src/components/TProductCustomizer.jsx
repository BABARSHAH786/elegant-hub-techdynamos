// more
import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Circle, Line, Text, Image as KonvaImage, Transformer, Group } from "react-konva";
import useImage from "use-image";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ProductCustomizer = () => {
  const [product, setProduct] = useState("shirt");
  const [color, setColor] = useState("#ffffff");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("Your Text");
  const [textSize, setTextSize] = useState(16);
  const [textColor, setTextColor] = useState("#000000");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(0);
  const stageRef = useRef(null);
  const transformerRef = useRef(null);
  const [uploadedImage] = useImage(image);
  const [lineColor, setLineColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(2);
  const [shapeTool, setShapeTool] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const addElement = (element) => {
    const newElements = [...elements, element];
    setElements(newElements);
    saveHistory(newElements);
  };

  const saveHistory = (newElements) => {
    const updatedHistory = history.slice(0, historyStep + 1);
    setHistory([...updatedHistory, newElements]);
    setHistoryStep(updatedHistory.length);
  };

  const undo = () => {
    if (historyStep > 0) {
      setHistoryStep(historyStep - 1);
      setElements(history[historyStep - 1]);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      setHistoryStep(historyStep + 1);
      setElements(history[historyStep + 1]);
    }
  };

  const handleMouseDown = (e) => {
    if (isDrawing) {
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { points: [pos.x, pos.y], stroke: lineColor, strokeWidth: lineWidth }]);
    } else if (shapeTool) {
      const pos = e.target.getStage().getPointerPosition();
      if(shapeTool === 'rect'){
        addElement({ type: 'rect', x: pos.x, y: pos.y, width: 50, height: 50, fill: 'red'});
      } else if (shapeTool === 'circle'){
        addElement({ type: 'circle', x: pos.x, y: pos.y, radius: 25, fill: 'blue'});
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines([...lines]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setShapeTool(null);
  };

  useEffect(() => {
    if (selectedElement !== null && transformerRef.current) {
      transformerRef.current.nodes([stageRef.current.getStage().findOne(`.${selectedElement}`)]);
    } else if (transformerRef.current) {
        transformerRef.current.nodes([]);
    }
  }, [selectedElement]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // toastify
  const notify = () => toast("Zoom In!");
 
  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
    toast.success('Zoomed In!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col items-center p-5 space-y-4">
      <h1 className="text-xl font-bold">Customize Your Product</h1>

      <select className="p-2 border rounded" value={product} onChange={(e) => setProduct(e.target.value)}>
        <option value="shirt">Shirt</option>
        <option value="mug">Mug</option>
      </select>

      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-16 h-10 border rounded" />

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <input type="text" placeholder="Enter text" value={text} onChange={(e) => setText(e.target.value)} className="p-2 border rounded" />

      <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setIsDrawing(!isDrawing)}>
        {isDrawing ? "Stop Drawing" : "Start Drawing"}
      </button>
      <button className="p-2 bg-gray-500 text-white rounded" onClick={undo}>Undo</button>
      <button className="p-2 bg-gray-500 text-white rounded" onClick={redo}>Redo</button>
      <button onClick={() => setShapeTool('rect')}>Add Rect</button>
      <button onClick={() => setShapeTool('circle')}>Add Circle</button>
      <button onClick={() => { setShapeTool('circle'); notify('Circle Added!'); }}>Add Circle</button>

      <button onClick={() => setSelectedElement(null)}>Unselect</button>
      <input type="color" value={lineColor} onChange={(e) => setLineColor(e.target.value)} />
      <input type="number" value={lineWidth} onChange={(e) => setLineWidth(parseInt(e.target.value))} />

      {/* <button onClick={ () => setZoomLevel(zoomLevel + 0.1)}>Zoom In</button> */}
      <button onClick={handleZoomIn}>Zoom In</button>
      <p>Zoom Level: {zoomLevel.toFixed(1)}</p>
      <button onClick={() => setZoomLevel(zoomLevel - 0.1)}>Zoom Out</button>

      <div className="border p-4" style={{ backgroundColor: color, width: "400px", height: "400px" }}>
        <Stage
          width={400}
          height={400}
          ref={stageRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={(e) => {if(e.target === stageRef.current.getStage()){setSelectedElement(null)}}}
          scaleX={zoomLevel}
          scaleY={zoomLevel}
        >
          <Layer>
            {uploadedImage && <KonvaImage image={uploadedImage} width={100 * zoomLevel} height={100 * zoomLevel} draggable />}
            {lines.map((line, i) => (
              <Line key={i} points={line.points} stroke={line.stroke} strokeWidth={line.strokeWidth} tension={0.5} lineCap="round" lineJoin="round" />
            ))}
            <Text text={text} fontSize={textSize} fill={textColor} fontFamily={fontFamily} draggable />
            {elements.map((el, i) => (
              <Group key={i} draggable onClick={() => setSelectedElement(i)} className={i.toString()}>
                {el.type === "rect" && <Rect {...el} />}
                {el.type === "circle" && <Circle {...el} />}
              </Group>
            ))}
            {selectedElement !== null && <Transformer ref={transformerRef} />}
          </Layer>

        </Stage>
      </div>
    </div>
  );
};

export default ProductCustomizer;