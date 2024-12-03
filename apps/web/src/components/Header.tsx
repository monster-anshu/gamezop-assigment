import { GameApi } from "@web-api/games";
import React, { FC } from "react";
import Logo from "./Logo";
import SearchBox from "./header/SearchBox";
import HeaderCategories from "./HeaderCategories";

type IHeaderProps = {};

const Header: FC<IHeaderProps> = async () => {
  const gamesWithCatgories = await GameApi.withCategories();
  const categories = Object.keys(gamesWithCatgories);
  return (
    <header className="bg-secondary py-4">
      <div className="container grid grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[auto_1fr_auto]">
        <Logo />
        <SearchBox isMobile />

        <HeaderCategories categories={categories} />
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
