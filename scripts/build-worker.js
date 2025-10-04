#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const workerDir = path.join(process.cwd(), 'dist', '_worker.js');
const indexFile = path.join(workerDir, 'index.js');

// Read the existing index.js
const existingContent = fs.readFileSync(indexFile, 'utf8');

// Add polyfills at the very beginning
const polyfillContent = `// Cloudflare Workers polyfills
globalThis.process ??= { env: { NODE_ENV: 'production' }, cwd: () => '/', platform: 'worker' };

// Create CommonJS environment
if (typeof globalThis.module === 'undefined') {
  globalThis.module = { exports: {} };
}

if (typeof globalThis.exports === 'undefined') {
  globalThis.exports = globalThis.module.exports;
}

if (typeof globalThis.require === 'undefined') {
  globalThis.require = function(id) {
    // Create a module cache
    if (!globalThis.__moduleCache) {
      globalThis.__moduleCache = new Map();
    }

    // Check cache first
    if (globalThis.__moduleCache.has(id)) {
      return globalThis.__moduleCache.get(id);
    }

    let moduleExports = {};

    // Handle node:fs and other Node.js modules
    if (id === 'node:fs' || id === 'fs') {
      moduleExports = {
        readFileSync: () => {},
        existsSync: () => false,
        writeFileSync: () => {},
        mkdirSync: () => {},
        promises: {
          readFile: async () => {},
          writeFile: async () => {}
        }
      };
    }
    // Handle path modules
    else if (id === 'node:path' || id === 'path') {
      moduleExports = {
        join: (...paths) => paths.join('/').replace(/\/+/g, '/'),
        resolve: (...paths) => paths.join('/').replace(/\/+/g, '/'),
        dirname: (p) => p.split('/').slice(0, -1).join('/') || '.',
        basename: (p) => p.split('/').pop() || '',
        extname: (p) => {
          const lastDot = p.lastIndexOf('.');
          return lastDot === -1 ? '' : p.slice(lastDot);
        },
        parse: (p) => {
          const dir = p.split('/').slice(0, -1).join('/');
          const base = p.split('/').pop() || '';
          const ext = base.includes('.') ? base.slice(base.lastIndexOf('.')) : '';
          const name = ext ? base.slice(0, -ext.length) : base;
          return { dir, base, ext, name };
        },
        sep: '/',
        delimiter: ':'
      };
    }
    // Handle url modules
    else if (id === 'node:url' || id === 'url') {
      moduleExports = {
        URL: globalThis.URL,
        URLSearchParams: globalThis.URLSearchParams,
        fileURLToPath: (url) => url.replace('file://', ''),
        pathToFileURL: (path) => \`file://\${path}\`
      };
    }
    // Handle React DOM server modules (these should already be available)
    else if (id.startsWith('./cjs/react-dom-server') || id.includes('react-dom-server')) {
      // Let these fail gracefully - they should be handled by the bundler
      throw new Error(\`React DOM server module '\${id}' should be handled by bundler\`);
    }
    else {
      // For other modules, return empty object to prevent crashes
      console.warn(\`Module '\${id}' not available in Workers runtime, returning empty object\`);
      moduleExports = {};
    }

    // Cache the result
    globalThis.__moduleCache.set(id, moduleExports);
    return moduleExports;
  };
}

// Set up global objects for CommonJS
globalThis.__dirname = '/';
globalThis.__filename = '/worker.js';

${existingContent}`;

// Write back with polyfills
fs.writeFileSync(indexFile, polyfillContent);

console.log('✅ Added polyfills to Worker entry point');