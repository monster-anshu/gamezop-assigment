import { Game } from "@web-types/game";
import sampledata from "./sample.json";
import { client } from "./client";

export class GameApi {
  static async withCategories() {
    const res = await client.get<GamesResponse>("/games?id=peSLSV");
    const gameCatgoryRecord: Record<string, Game[]> = {};

    for (const game of res.data.games) {
      const category = game.categories.en.at(0);
      if (!category) {
        continue;
      }
      gameCatgoryRecord[category] ??= [];
      gameCatgoryRecord[category].push({
        image: game.assets.square,
        name: game.name.en,
        id: game.code,
        category: game.categories.en.at(0),
      });
    }

    return gameCatgoryRecord;
  }

  static async heroImages() {
    const res = await client.get<GamesResponse>("/games?id=peSLSV");

    const set = new Set<string>();

    for (const game of res.data.games) {
      if (set.size >= 12) {
        break;
      }
      set.add(game.assets.cover);
    }

    return Array.from(set);
  }

  static async getGameForCatgory(category: string) {
    const games = await this.withCategories();
    return games[category] || [];
  }

  static async search(query: string) {
    const res = await client.get<GamesResponse>("/games?id=peSLSV");
    return res.data.games
      .filter((game) => {
        const name = game.name.en.toLowerCase();
        return name.includes(query.toLowerCase());
      })
      .map((game) => {
        return {
          id: game.code,
          image: game.assets.square,
          name: game.name.en,
          category: game.categories.en.at(0),
        } as Game;
      });
  }
}

type GamesResponse = typeof sampledata;
