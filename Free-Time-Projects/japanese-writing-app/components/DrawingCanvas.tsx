"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";

interface DrawingCanvasProps {
  onDrawingComplete?: (imageData: string) => void;
  width?: number;
  height?: number;
  lineColor?: string;
  lineWidth?: number;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  onDrawingComplete,
  width = 400,
  height = 400,
  lineColor = "#000000",
  lineWidth = 5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Initialize canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas background to white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set line styles
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [lineColor, lineWidth]);

  const getCanvasCoordinates = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    },
    []
  );

  const startDrawing = useCallback(
    (e: React.MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { x, y } = getCanvasCoordinates(e);

      ctx.beginPath();
      ctx.moveTo(x, y);

      setIsDrawing(true);
      setLastPosition({ x, y });
    },
    [getCanvasCoordinates]
  );

  const draw = useCallback(
    (e: React.MouseEvent) => {
      if (!isDrawing || !lastPosition) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { x, y } = getCanvasCoordinates(e);

      ctx.beginPath();
      ctx.moveTo(lastPosition.x, lastPosition.y);
      ctx.lineTo(x, y);
      ctx.stroke();

      setLastPosition({ x, y });
    },
    [isDrawing, lastPosition, getCanvasCoordinates]
  );

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
    setLastPosition(null);

    // Call the completion callback
    if (onDrawingComplete) {
      const canvas = canvasRef.current;
      if (canvas) {
        const imageData = canvas.toDataURL("image/png");
        onDrawingComplete(imageData);
      }
    }
  }, [onDrawingComplete]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and set white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Reset line styles
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [lineColor, lineWidth]);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    if (isDrawing) {
      stopDrawing();
    }
  }, [isDrawing, stopDrawing]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="block bg-white cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Clear Canvas
        </button>
        <button
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas && onDrawingComplete) {
              onDrawingComplete(canvas.toDataURL("image/png"));
            }
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          Check Answer
        </button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
