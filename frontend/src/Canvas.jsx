import React, { useEffect, useRef, useState } from 'react';
import canvasImages from './canvasimages';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Canvas = ({details}) => {
    const [index, setIndex] = useState({value: details.startIndex});
    const canvasRef = useRef(null);

    const {startIndex, numImages, duration, size, top, left, zIndex} = details;

    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + 149,
            duration: duration,
            ease: 'linear',
            repeat: -1,
            onUpdate: () => {
                setIndex({value: Math.round(index.value)});
            }
        })
        gsap.from(canvasRef.current, {
            opacity: 0,
            scale: 0.5,
            ease: 'power2.inOut',
            duration: 1,
        })
    })
    
    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = canvasImages[index.value];
            img.onload = () => {
                // Draw the image centered on the canvas
                canvas.width = canvas.offsetWidth * scale;
                canvas.height = canvas.offsetHeight * scale;
                canvas.style.width = canvas.offsetWidth + 'px';
                canvas.style.height = canvas.offsetHeight + 'px';

                ctx.scale(scale, scale);
                ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        }
    }, [index.value])
  return (
      <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      ref={canvasRef} 
      className='absolute'
      style={{width: `${size * 1.6}px`, height: `${size * 1.6}px`, top: `${top}%`, left: `${left}%`, zIndex: `${zIndex}`}} 

      id='canvas'
      ></canvas>
  )
}

export default Canvas
