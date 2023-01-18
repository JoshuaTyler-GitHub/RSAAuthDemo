import { useCallback, useEffect, useRef, useState } from "react";

// canvas animation
const CANVAS_BLUE = String('#67b7e2');
const CANVAS_RED = String('#be3a34');
const CANVAS_WHITE = String('#ffffff');
const fontSize = Number('20');
const characters = String('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}');
const matrix = Array.from(characters);

function drawCrypto(canvas, columns) {
  const context = canvas.getContext('2d');

  // darken canvas with each pass
  context.fillStyle = String('rgb(255, 255, 255, 0.1)');
  context.fillRect(0, 0, canvas.width, canvas.height);

  // iterate columns
  for (let i = 0; i < columns.length; i++) {
    // get the character to draw
    const lastCharacter = String(columns[i].lastCharacter);
    const newCharacter = String(
      matrix[Math.floor(Math.random() * matrix.length)],
    );

    // set offsets
    const xOffset = Number(i * fontSize);
    const yOffset = Number(columns[i].row * fontSize);
    const yOffsetMinus1 = Number((columns[i].row - 1) * fontSize);
    const yOffsetMinus30 = Number((columns[i].row - 30) * fontSize);
    const isOffscreen = Boolean(yOffset > Number(canvas.height));

    // maintain character if row is locked
    if (columns[i].isRowLocked) {
      context.fillStyle = CANVAS_BLUE;
      context.fillText(lastCharacter, xOffset, yOffsetMinus1);
      continue;
    }

    // draw new letter white
    context.fillStyle = CANVAS_BLUE;
    context.fillText(newCharacter, xOffset, yOffset);

    // set previous letter red
    context.fillStyle = CANVAS_RED;
    context.fillText(lastCharacter, xOffset, yOffsetMinus1);

    // lock row blue 5% chance
    if (!isOffscreen && Math.random() < Number('0.05')) {
      context.fillStyle = CANVAS_BLUE;
      context.fillText(lastCharacter, xOffset, yOffsetMinus1);
      columns[i].isRowLocked = Boolean(true);
    }

    // trail reset to black
    if (columns[i].isFirstPassDone) {
      context.fillStyle = CANVAS_WHITE;
      context.fillRect(xOffset, yOffsetMinus30, fontSize, fontSize);
    }

    // reset row to top - 10% chance
    if (isOffscreen && Math.random() < Number('0.1')) {
      columns[i].isFirstPassDone = Boolean(true);
      columns[i].row = Number('0');
    }

    // progress upward
    else {
      columns[i].row++;
    }

    // track the letter drawn
    columns[i].lastCharacter = newCharacter;
  }
};

function Animation2() {
  const canvasRef = useRef(null);
  const [canvasInterval, setCanvasInterval] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeCanvas = useCallback((canvas) => {
    const context = canvas.getContext('2d');
    canvas.height = Number(canvas.clientHeight * window.devicePixelRatio);
    canvas.width = Number(canvas.clientWidth * window.devicePixelRatio);
    context.font = String(`${fontSize}px arial`);
    const columnCount = Number(Math.ceil(canvas.width / fontSize));
    const columns = Array(columnCount).fill().map(() => {
      return {
        isFirstPassDone: Boolean(false),
        isRowLocked: Boolean(false),
        lastCharacter: String(matrix[0]),
        row: Number('0'),
      }
    });
    setCanvasInterval(setInterval(() => drawCrypto(canvas, columns), 50));
  }, [setCanvasInterval]);

  // initialize canvas
  useEffect(() => {
    if(!isInitialized && canvasRef.current) {
      setIsInitialized(true);
      initializeCanvas(canvasRef.current);
      return () => {
        clearInterval(canvasInterval);
      };
    }
  }, [canvasInterval, canvasRef, initializeCanvas, isInitialized, setIsInitialized]);

  return (
    <div id='animation-frame-2' className='animation-frame' style={{ width: '100%' }}>
      <canvas id='canvas' ref={canvasRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
export default Animation2;
