import { defineConfig } from "vite";

export default defineConfig({
  server: { proxy: { "/api/": "http://loacalhost:3000" } },
});
