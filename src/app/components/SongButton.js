"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

// Create a global audio context
let globalAudioRef = null;
let globalSetIsPlaying = null;

const SongButton = ({ imageUrl, songNumber, songName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    try {
      if (globalAudioRef && globalAudioRef !== audioRef.current) {
        globalAudioRef.pause();
        globalSetIsPlaying(false);
      }

      if (!audioRef.current) {
        audioRef.current = new Audio(`/CreepyNuts/songs/${songName}.mp3`);
        audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error('Playback failed:', e));
      }

      globalAudioRef = audioRef.current;
      globalSetIsPlaying = setIsPlaying;
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Audio error:', error);
    }
  };

  return (
    <div className="flex xl:flex-wrap w-[200px] max-w-full gap-2">
      <button 
        className="border-none relative group"
        onClick={togglePlay}
        disabled={songName === "UNSET"}
      >
        <div className="relative w-full aspect-square">
          <Image
            className="aspect-square max-w-full block"
            src={imageUrl}
            alt={songName}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-12 h-12 text-white" />
            ) : (
              <Play className="w-12 h-12 text-white" />
            )}
          </div>
        </div>
      </button>
      <div>
        <h3 className="text-[0.625rem] opacity-60">「{songNumber}」</h3>
        <p className="max-w-[16.25rem] text-[0.75rem]">{songName}</p>
      </div>
    </div>
  );
};

export default SongButton;