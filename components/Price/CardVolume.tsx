"use client";

import { useRef, useState, useEffect, ChangeEvent } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { CiVolumeHigh } from "react-icons/ci";
import { Volume } from "../Volume";

interface ICardVolume {
  volume: {
    id: number;
    title: string;
    volume: string;
  };
}

export const CardVolume = ({ volume }: ICardVolume) => {
  const { title, volume: volum } = volume;

  return (
    <div>
      <p>{title}</p>

      <Volume volume={volum} />
    </div>
  );
};
