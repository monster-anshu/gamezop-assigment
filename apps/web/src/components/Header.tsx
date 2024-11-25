import { GameApi } from "@web-api/games";
import { getIconForCategory } from "@web-utils/icon";
import React, { FC } from "react";
import Logo from "./Logo";
import SearchBox from "./header/SearchBox";

type IHeaderProps = {};

const Header: FC<IHeaderProps> = async () => {
  const gamesWithCatgories = await GameApi.withCategories();
  const categories = Object.keys(gamesWithCatgories);
  return (
    <header className="bg-secondary py-6">
      <div className="container grid grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[auto_1fr_auto]">
        <Logo />
        <SearchBox isMobile />

        <div className="col-span-2 flex gap-2 overflow-auto md:col-span-1">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className="bg-primary/20 dark:bg-primary flex items-center gap-3 rounded-3xl px-8 py-2"
              >
                <span className="text-primary dark:text-yellow-200">
                  {getIconForCategory(category)}
                </span>
                <span className="text-primary dark:text-foreground whitespace-nowrap text-sm font-medium">
                  {category}
                </span>
              </button>
            );
          })}
        </div>
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
