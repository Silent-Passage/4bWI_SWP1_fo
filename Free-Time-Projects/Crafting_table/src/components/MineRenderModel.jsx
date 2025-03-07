import { useEffect, useRef } from "react";
import $ from "jquery";
import * as THREE from "three";

const MINE_RENDER_CDN =
  "https://cdn.jsdelivr.net/gh/InventivetalentDev/MineRender@1.4.6/dist/model.min.js";

export default function MineRenderModel() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically load MineRender script
    const script = document.createElement("script");
    script.src = MINE_RENDER_CDN;
    script.onload = () => {
      if (window.ModelRender) {
        const modelRender = new window.ModelRender({}, containerRef.current);
        modelRender.render(["block/anvil"]);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "200px", height: "200px" }} />;
}
