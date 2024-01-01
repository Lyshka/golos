"use client";

import { useRef, useState, useEffect, ChangeEvent } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { CiVolumeHigh } from "react-icons/ci";

interface ICardVolume {
  volume: string;
}

export const Volume = ({ volume }: ICardVolume) => {
  const [audio] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio(volume) : null
  );
  const ref = useRef(audio);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(duration);
  const [play, setPlay] = useState(false);
  const [vol, setVol] = useState(0.5);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVol(+event.target.value);
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(+event.target.value);
  };

  const playMusic = () => {
    if (ref.current !== null) {
      ref.current.play();
    }
    setPlay(true);
  };

  const stopMusic = () => {
    if (ref.current !== null) {
      ref.current.pause();
    }
    setPlay(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (play) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [play]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.volume = vol;
    }
  }, [vol]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.currentTime = time;
    }
  }, [time]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener("loadedmetadata", () => {
        if (ref.current !== null) {
          setDuration(ref.current.duration);
        }
      });

      ref.current.addEventListener("ended", () => {
        setPlay(false);
        setTime(0);
      });
    }

    return () => {
      if (ref.current !== null) {
        ref.current.removeEventListener("loadedmetadata", () => {
          if (ref.current !== null) {
            setDuration(ref.current.duration);
          }
        });

        ref.current.removeEventListener("ended", () => {
          setPlay(false);
          setTime(0);
        });
      }
    };
  }, []);

  return (
    <div className="bg-[#3b81bf] mt-4 flex items-center justify-between text-white p-4 w-full gap-4">
      <div className="flex items-center gap-2">
        {play ? (
          <FaPause className="cursor-pointer" onClick={stopMusic} />
        ) : (
          <FaPlay className="cursor-pointer" onClick={playMusic} />
        )}
        <div className="text-xs">{formatTime(time)}</div>
      </div>

      <div className="bg-white h-2 w-80 relative">
        <div
          style={{ width: `${Math.round((time * 100) / duration)}%` }}
          className="h-full bg-blue-300 transition-all"
        >
          &nbsp;
        </div>
        <input
          type="range"
          min="0"
          max={duration}
          value={vol}
          onChange={handleTimeChange}
          className="w-full absolute inset-0 opacity-0"
        />
      </div>

      <div className="flex items-center gap-2">
        <CiVolumeHigh />
        <div className="bg-white h-2 w-14 relative">
          <div
            style={{ width: `${vol * 100}%` }}
            className="h-full bg-blue-300 relative transition-all"
          ></div>
          <input
            type="range"
            min="0"
            max="1"
            step={0.1}
            value={vol}
            onChange={handleVolumeChange}
            className="w-full absolute inset-0 opacity-0"
          />
        </div>
      </div>
    </div>
  );
};
