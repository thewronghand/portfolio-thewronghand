import { useEffect, useRef } from "react";

const createNoise = (
  ctx: CanvasRenderingContext2D,
  wWidth: number,
  wHeight: number
): ImageData => {
  const iData = ctx.createImageData(wWidth, wHeight);
  const buffer32 = new Uint32Array(iData.data.buffer);
  const len = buffer32.length;
  const color = 0xff000000;

  for (let i = 0; i < len; i++) {
    if (Math.random() < 0.1) {
      buffer32[i] = color;
    }
  }

  return iData;
};

export const useGrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let noiseData: ImageData[] = [];
    let frame = 0;
    let loopTimeout: number;

    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }
      ctx.putImageData(noiseData[frame], 0, 0);
    };

    const loop = () => {
      paintNoise();
      loopTimeout = window.setTimeout(() => {
        requestAnimationFrame(loop);
      }, 1000 / 25);
    };

    const setup = () => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;

      noiseData = [];
      for (let i = 0; i < 10; i++) {
        noiseData.push(createNoise(ctx, wWidth, wHeight));
      }

      clearTimeout(loopTimeout);
      loop();
    };

    const handleResize = () => {
      clearTimeout(loopTimeout);
      setup();
    };

    setup();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(loopTimeout);
    };
  }, []);

  return canvasRef;
};
