import sampledata from "./sample.json";

export class GameApi {
  static async categories() {
    const set = new Set<string>();
    sampledata.games.forEach((game) => {
      game.categories.en.forEach((category) => set.add(category));
    });

    return Array.from(set);
  }
}
