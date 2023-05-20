import React, { useRef, useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import "../../index.css";

const Canvas = () => {
  const canvasRef = useRef();
  const linePickerRef = useRef();
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(1);
  const [ctx, setCtx] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  function handleDownload() {
    const canvas = document.getElementById("canvas");
    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let clicking = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 300;

    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    canvas.addEventListener("touchstart", (event) => {
      const canvasX = event.touches[0].pageX - canvas.offsetLeft;
      const canvasY = event.touches[0].pageY - canvas.offsetTop;

      clicking = true;

      ctx.beginPath();

      ctx.moveTo(canvasX, canvasY);
    });

    canvas.addEventListener("touchmove", (e) => {
      if (clicking === true) {
        const canvasX = e.touches[0].pageX - canvas.offsetLeft;
        const canvasY = e.touches[0].pageY - canvas.offsetTop;

        ctx.lineTo(canvasX, canvasY);
        ctx.stroke();
      }
    });

    canvas.addEventListener("touchend", (e) => {
      clicking = false;
    });

    canvas.addEventListener("touchcancel", () => {
      clicking = false;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!("ontouchstart" in window) && clicking === true) {
        const canvasX = e.pageX - canvas.offsetLeft;
        const canvasY = e.pageY - canvas.offsetTop;

        ctx.lineTo(canvasX, canvasY);
        ctx.stroke();
      }
    });

    canvas.addEventListener("mousedown", (event) => {
      const canvasX = event.pageX - canvas.offsetLeft;
      const canvasY = event.pageY - canvas.offsetTop;

      clicking = true;

      ctx.beginPath();

      ctx.moveTo(canvasX, canvasY);
    });

    canvas.addEventListener("mouseup", (e) => {
      clicking = false;
    });

    canvas.addEventListener("mouseout", () => {
      clicking = false;
    });

    setCtx(ctx);
  }, []);

  const reset = () => {
    if (
        window.confirm("Hey! Tens a certeza que queres apagar sem salvar antes?")
    ) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const linePicker = linePickerRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      linePicker.value = 1;
      setLineWidth(1);
      ctx.lineWidth = 1;

      setColor("#000000");
      ctx.strokeStyle = "#000000";
    }
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
          containerRef.current &&
          !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
      <div className="button-container">
        <button className="canvasButton" onClick={reset}>
          Resetar
        </button>
        <button className="canvasButton" onClick={handleDownload}>
          Salvar
        </button>
        <div className="canvasButton" ref={containerRef}>
          <button onClick={() => setIsOpen(!isOpen)} ref={buttonRef}>
            {isOpen ? "Fechar" : "Abrir Palete de Cores"}
          </button>
          {isOpen && (
              <div className="color-picker-container">
                <SketchPicker
                    color={color}
                    onChange={(newColor) => {
                      setColor(newColor.hex);
                      if (ctx) {
                        ctx.strokeStyle = newColor.hex;
                      }
                    }}
                />
              </div>
          )}
        </div>
        <div className="controls-container">
          <div className="line-picker-container">
            <span>Tamanho</span>
            <input
                type="range"
                name="linePicker"
                min="10"
                max="30"
                value={lineWidth}
                step="2"
                onChange={(e) => {
                  setLineWidth(e.target.value);
                  if (ctx) {
                    ctx.lineWidth = e.target.value;
                  }
                }}
                ref={linePickerRef}
            />
          </div>
        </div>
        <div className="canvas-container">
          <canvas id="canvas" ref={canvasRef} style={{ touchAction: "none" }} />
        </div>
      </div>
  );
};

export default Canvas;
