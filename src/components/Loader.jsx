import React from 'react'
import { Html,useProgress } from '@react-three/drei'
const CanvasLoader = () => {
  const progress = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
      style={{
        fontSize:14,
        color:'#f1f1f1',
        marginTop:1,
        fontWeight:800,
        position:'absolute',
        bottom:'250px'
      }}
      >{progress.loaded}%</p>

    </Html>
  )
}

export default CanvasLoader