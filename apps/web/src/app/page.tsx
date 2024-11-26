import { GameApi } from "@web-api/games";
import GameCarousel from "@web-components/GameCarousel";
import HeroGrid from "@web-components/HeroGrid";
import InstallationCarousel from "@web-components/InstallationCarousel";
import React from "react";

export default async function Home() {
  const gamesWithCatgories = await GameApi.withCategories();
  return (
    <main className="my-4 space-y-6">
      <HeroGrid />
      {Object.entries(gamesWithCatgories).map(([category, games], i) => {
        return (
          <React.Fragment key={category}>
            {i === 3 && <InstallationCarousel />}
            <GameCarousel key={category} category={category} games={games} />
          </React.Fragment>
        );
      })}
    </main>
  );
}
