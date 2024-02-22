import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    replace({
      "process.env.REACT_APP_MY_API_KEY": JSON.stringify(
        process.env.REACT_APP_MY_API_KEY
      ),
    }),
  ],
});
