import { GameApi } from "@web-api/games";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type IHeroGridProps = {};

const col2Index = [1, 4, 6];

const HeroGrid: FC<IHeroGridProps> = async () => {
  const images = await GameApi.heroImages();

  return (
    <div className="container">
      <div className="bg-secondary border-primary-foreground grid max-w-5xl grid-cols-7 grid-rows-3 gap-4 rounded-2xl border p-4">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={twMerge(
                "relative w-full",
                col2Index.includes(index)
                  ? "col-span-2 row-span-2"
                  : "col-span-1 row-span-1"
              )}
            >
              <img src={image} alt="" className="w-full rounded-xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroGrid;
