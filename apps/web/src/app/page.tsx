import { GameApi } from "@web-api/games";
import GameCarousel from "@web-components/GameCarousel";
import HeroGrid from "@web-components/HeroGrid";

export default async function Home() {
  const gamesWithCatgories = await GameApi.withCategories();
  return (
    <main className="my-4 space-y-6">
      <HeroGrid />

      {Object.entries(gamesWithCatgories).map(([category, games]) => {
        return (
          <GameCarousel key={category} category={category} games={games} />
        );
      })}
    </main>
  );
}
