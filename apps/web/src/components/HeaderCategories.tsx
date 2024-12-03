"use client";
import { getIconForCategory } from "@web-utils/icon";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type IHeaderCategoriesProps = {
  categories: string[];
};

const HeaderCategories: FC<IHeaderCategoriesProps> = ({ categories }) => {
  const params = useParams();
  const category = params.category as string;
  const selectedCategory = category ? decodeURIComponent(category) : null;
  return (
    <div className="col-span-2 flex gap-2 overflow-auto md:col-span-1">
      {categories.map((category) => {
        const isSelected = category === selectedCategory;
        return (
          <Link
            href={`/category/${category}`}
            aria-label={category}
            key={category}
          >
            <button
              className={twMerge(
                "flex items-center gap-3 rounded-3xl px-8 py-2",
                isSelected
                  ? "bg-primary dark:bg-yellow-200"
                  : "bg-primary/20 dark:bg-primary"
              )}
            >
              <span
                className={twMerge(
                  isSelected
                    ? "dark:text-primary text-white"
                    : "text-primary dark:text-yellow-200"
                )}
              >
                {getIconForCategory(category)}
              </span>
              <span
                className={twMerge(
                  "whitespace-nowrap text-sm font-medium",
                  isSelected
                    ? "dark:text-primary text-white"
                    : "text-primary dark:text-foreground"
                )}
              >
                {category}
              </span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderCategories;
