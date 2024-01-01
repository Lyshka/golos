import { volumes } from "@/constants/price";
import { CardVolume } from "./CardVolume";

export const ListVolumes = () => {
  return (
    <div className="grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-8 gap-4">
      {volumes.map((volume) => (
        <CardVolume key={volume.id} volume={volume} />
      ))}
    </div>
  );
};
