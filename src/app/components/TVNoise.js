'use client'
import React, { useEffect, useState } from 'react';

const TVNoise = () => {
  const [noisePattern, setNoisePattern] = useState('');

  useEffect(() => {
    const generateNoise = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 128;
      canvas.height = 128;
      
      const imageData = ctx.createImageData(128, 128);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random();
        const pattern = Math.sin(i * noise) * Math.cos(i * noise) * 255;
        const value = Math.abs(pattern) % 255;
        
        data[i] = value * (Math.random() * 0.3 + 0.7);     // r
        data[i + 1] = value * (Math.random() * 0.3 + 0.7); // g
        data[i + 2] = value * (Math.random() * 0.3 + 0.7); // b
        data[i + 3] = 255 * (Math.random() * 0.2 + 0.8);   // alpha
      }
      
      ctx.putImageData(imageData, 0, 0);
      setNoisePattern(canvas.toDataURL());
    };

    const interval = setInterval(generateNoise, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `url(${noisePattern})`,
          backgroundSize: '256px 256px',
          filter: 'contrast(170%) brightness(90%) blur(0.5px)',
          opacity: 0.2,
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

export default TVNoise;