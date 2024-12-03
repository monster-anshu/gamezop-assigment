"use client";
import { Game } from "@web-types/game";
import React, { FC, useLayoutEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type IGameHeartProps = {
  game: Game;
};

const GameHeart: FC<IGameHeartProps> = ({ game }) => {
  const [isSelected, setIsSelected] = useState(false);

  useLayoutEffect(() => {
    const fav = localStorage.getItem("favorite") || "[]";
    const arr = JSON.parse(fav) as string[];
    const isSelected = arr.includes(game.id);
    setIsSelected(isSelected);
  }, []);

  const handleClick = () => {
    try {
      const fav = localStorage.getItem("favorite") || "[]";
      const arr = JSON.parse(fav) as string[];
      const set = new Set(arr);
      if (set.has(game.id)) {
        set.delete(game.id);
      } else {
        set.add(game.id);
      }
      const json = JSON.stringify(Array.from(set));
      localStorage.setItem("favorite", json);
      setIsSelected(set.has(game.id));
    } catch (error) {
      const arr = [game.id];
      const json = JSON.stringify(arr);
      localStorage.setItem("favorite", json);
      setIsSelected(true);
    }
  };

  return (
    <button
      aria-label="Add to favorite"
      onClick={handleClick}
      className={twMerge(
        "absolute right-2 top-2 rounded-full p-2 text-white",
        isSelected ? "bg-pink-300/90" : "bg-black/70"
      )}
    >
      {isSelected ? (
        <FaHeart size={20} className="text-pink-600" />
      ) : (
        <FaRegHeart size={20} />
      )}
    </button>
  );
};

export default GameHeart;
