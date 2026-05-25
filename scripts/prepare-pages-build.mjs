import { cp, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { FastURL } from "srvx";

const root = process.cwd();
const clientDir = path.join(root, "dist/client");
const serverDir = path.join(root, "dist/server");
const serverAssetsDir = path.join(serverDir, "assets");
const clientAssetsDir = path.join(clientDir, "assets");

console.log("Preparing build for Pages (Cloudflare & GitHub)...");

await mkdir(clientAssetsDir, { recursive: true });

// 1. Prepare Cloudflare _worker.js
const serverFile = path.join(serverDir, "server.js");
await cp(serverFile, path.join(clientDir, "_worker.js"));
// Also keep server.js for relative imports from assets/
await cp(serverFile, path.join(clientDir, "server.js"));

// 2. Copy server assets to client (sometimes needed by TanStack Start)
const serverAssetEntries = await readdir(serverAssetsDir, { withFileTypes: true });
for (const entry of serverAssetEntries) {
  if (!entry.isFile() || !entry.name.endsWith(".js")) continue;
  await cp(path.join(serverAssetsDir, entry.name), path.join(clientAssetsDir, entry.name));
}

// 3. Generate index.html for static hosts (GitHub Pages)
console.log("Generating index.html...");
try {
  const server = await import(path.join(serverDir, "server.js"));
  const fetchHandler = server.default?.fetch || server.fetch;

  if (typeof fetchHandler === "function") {
    const url = "http://localhost/";
    const req = new Request(url, {
      headers: { host: "localhost" }
    });
    
    // Some libraries check for these properties directly
    const env = {};
    const ctx = {
      waitUntil: (promise) => {
        if (promise instanceof Promise) promise.catch(console.error);
      },
      passThroughOnException: () => {},
    };

    const res = await fetchHandler.call(server.default || server, req, env, ctx);
    const html = await res.text();

    const indexPath = path.join(clientDir, "index.html");
    await writeFile(indexPath, html);
    console.log("Created index.html");

    // 4. Create 404.html for GitHub Pages SPA routing
    await cp(indexPath, path.join(clientDir, "404.html"));
    console.log("Created 404.html");

    // 5. Create _routes.json for Cloudflare Pages
    const routes = {
      version: 1,
      include: ["/*"],
      exclude: ["/assets/*"],
    };
    await writeFile(path.join(clientDir, "_routes.json"), JSON.stringify(routes, null, 2));
    console.log("Created _routes.json");
  } else {
    console.error("Could not find fetch handler in server.js");
  }
} catch (error) {
  console.error("Failed to generate static HTML:", error);
}

console.log("Build preparation complete.");
