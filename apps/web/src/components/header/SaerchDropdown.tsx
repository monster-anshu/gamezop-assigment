"use client";
import { Game } from "@web-types/game";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import SearchGamecard from "./SearchGamecard";
import { CiSearch } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { RxCross2 } from "react-icons/rx";
import { debounce } from "@web-utils/debounce";
import { GameApi } from "@web-api/games";

type ISaerchDropdownProps = {
  onHide: () => void;
};

const SaerchDropdown: FC<ISaerchDropdownProps> = ({ onHide }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([] as Game[]);
  const t = useTranslations("Header");

  const debouncedSearch = useMemo(() => {
    return debounce(async (query: string) => {
      if (query.length < 2) {
        setGames([]);
        return;
      }
      const games = await GameApi.search(query);
      setGames(games);
    }, 200);
  }, []);

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  return (
    <div>
      <div
        className="outline-primary bg-primary/10 dark:bg-primary flex items-center gap-1 rounded-3xl px-2 outline-1 focus-within:outline dark:outline-white"
        onClick={() => ref.current?.focus()}
      >
        <CiSearch size={18} />
        <input
          type="text"
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("search.placeholder")}
          className="w-44 bg-transparent px-1 py-2 text-sm focus:outline-0"
          autoFocus
        />
        <button
          className="bg-secondary rounded-full p-1"
          onClick={() => onHide()}
        >
          <RxCross2 size={16} />
        </button>
      </div>
      {games.length > 0 && (
        <div className="bg-primary absolute left-0 right-0 top-full z-10 max-h-96 translate-y-2 overflow-auto rounded-lg border py-2 shadow">
          {games.map((game) => {
            return <SearchGamecard key={game.id} game={game} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SaerchDropdown;
