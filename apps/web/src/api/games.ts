import { Game } from "@web-types/game";
import sampledata from "./sample.json";

export class GameApi {
  static async withCategories() {
    const gameCatgoryRecord: Record<string, Game[]> = {};

    for (const game of sampledata.games) {
      const category = game.categories.en.at(0);
      if (!category) {
        continue;
      }
      gameCatgoryRecord[category] ??= [];
      gameCatgoryRecord[category].push({
        image: game.assets.square,
        name: game.name.en,
      });
    }

    return gameCatgoryRecord;
  }

  static async heroImages() {
    const set = new Set<string>();

    for (const game of sampledata.games) {
      if (set.size >= 12) {
        break;
      }
      set.add(game.assets.cover);
    }

    return Array.from(set);
  }

  static getGameForCatgory(category: string) {}
}
