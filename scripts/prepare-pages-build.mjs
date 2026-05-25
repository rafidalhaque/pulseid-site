import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const clientDir = path.join(root, "dist/client");
const serverDir = path.join(root, "dist/server");
const serverAssetsDir = path.join(serverDir, "assets");
const clientAssetsDir = path.join(clientDir, "assets");

await mkdir(clientAssetsDir, { recursive: true });
await cp(path.join(serverDir, "index.js"), path.join(clientDir, "_worker.js"));

const serverAssetEntries = await readdir(serverAssetsDir, { withFileTypes: true });
for (const entry of serverAssetEntries) {
  if (!entry.isFile() || !entry.name.endsWith(".js")) continue;
  await cp(path.join(serverAssetsDir, entry.name), path.join(clientAssetsDir, entry.name));
}
