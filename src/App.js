import { createRoot } from 'react-dom/client';
import{ Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react'; 
 
import'./App.css';
import React from "react";
import { OrbitControls } from 'three/examples/jsm/Addons.js';


function Rotatethebox(){
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
          <boxGeometry args={[2, 2, 2]}/>
          <directionalLight color="red"/>
        </mesh>
  )


}


function App() {
  return (
    <div id="canvas-container" className='app'>
      <Canvas>
          <Rotatethebox/>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]}/>
          <OrbitControls/>
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
export default App;
