import config from "../blog.config.js";

import fs from "fs";
import path from "path";

const plugins = config.plugins || [];

for (const plugin of plugins) {
  const routes = plugin.routes || [];

  for (const route of routes) {
    const dirname = path.dirname(route.path);
  }
}
