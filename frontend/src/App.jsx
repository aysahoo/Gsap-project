import React, { useEffect, useState, useRef } from 'react'
import Canvas from './Canvas'
import data from './data.js';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const [showCanvas, setShowCanvas] = useState(false);
  const tapRef = useRef(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    tapRef.current.addEventListener("click", () => {
      setShowCanvas(!showCanvas);
    })
    
  }, [showCanvas]);

  return (
    <div ref={tapRef} className='w-full h-screen bg-black font-[monospace]'>
      {showCanvas && (
        <>
          <div className='w-full min-h-screen text-white relative'>
            {data[0].map((canvasDetails) => (
              <Canvas
                details={canvasDetails}
                key={canvasDetails.startIndex}
              />
            ))}
          </div>
          <div className='w-full min-h-screen text-white relative'>
            {data[1].map((canvasDetails) => (
              <Canvas
                details={canvasDetails}
                key={canvasDetails.startIndex}
              />
            ))}
          </div>
          <div className='w-full min-h-screen text-white relative'>
            {data[2].map((canvasDetails) => (
              <Canvas
                details={canvasDetails}
                key={canvasDetails.startIndex}
              />
            ))}
          </div>
          <div className='w-full min-h-screen text-white relative'>
            {data[3].map((canvasDetails) => (
              <Canvas
                details={canvasDetails}
                key={canvasDetails.startIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
