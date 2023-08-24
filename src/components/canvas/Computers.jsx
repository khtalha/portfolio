import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={25} position={[3,3.75,2]} />
      <spotLight intensity={5}
      position={[5,3,-3]}
      angle={5}
      castShadow
      shadow-mapsize={1024}
      />
       <spotLight intensity={25}
      position={[3,3,2]}
      angle={4}
      penumbra={1}
      />
      <primitive 
      object= {computer.scene} 
      scale={isMobile ? 0.6 : 0.75} 
      position= {isMobile ?[1,1.75,-1]:[1,1.75,-1.5]}
      rotation= {[0.01,0,-0.17]}
      />
    </mesh>
    
  )
    
}

const ComputersCanvas =()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
   const mediaQuery = window.matchMedia(
    '(max-width:650px)')
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    return () =>{
       mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])
  return (
    <Canvas
      
      frameloop='demand'
      shadows
      camera={{position:[25,3,5] , fov:25}}
      
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense
      fallback={<CanvasLoader/>}
      >
        <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        
        />
        
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas