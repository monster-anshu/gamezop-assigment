import axios from "axios";

const apiHost = "https://pub.gamezop.com/v3";

export const client = axios.create({
  baseURL: typeof window === "undefined" ? apiHost : "/api",
  adapter: "fetch",
  headers: {
    "Cache-Control": "cache",
  },
});
