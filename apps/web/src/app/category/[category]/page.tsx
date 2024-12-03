import { GameApi } from "@web-api/games";
import GameCard from "@web-components/GameCard";
import { getIconForCategory } from "@web-utils/icon";
import React, { FC } from "react";

type ICategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const CategoryPage: FC<ICategoryPageProps> = async ({ params }) => {
  const awaitedParams = await params;
  const category = decodeURIComponent(awaitedParams.category);
  const games = await GameApi.getGameForCatgory(category);

  return (
    <main className="md:bg-secondary border-primary-foreground container rounded-xl p-3 md:my-8 md:border md:p-6">
      <div className="flex items-center gap-2 px-2 text-2xl font-bold">
        {getIconForCategory(category)}
        <p>{category}</p>
      </div>
      <div className="mx-auto mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {games.map((game) => {
          return <GameCard game={game} key={game.id} className="w-full" />;
        })}
      </div>
    </main>
  );
};

export default CategoryPage;

export async function generateStaticParams() {
  const gamesWithCatgories = await GameApi.withCategories();
  const categories = Object.keys(gamesWithCatgories);

  return categories.map((category) => ({
    category: category,
  }));
}
