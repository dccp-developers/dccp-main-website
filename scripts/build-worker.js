#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const workerDir = path.join(process.cwd(), 'dist', '_worker.js');
const indexFile = path.join(workerDir, 'index.js');

// Read the existing index.js
const existingContent = fs.readFileSync(indexFile, 'utf8');

// Add polyfills at the very beginning
const polyfillContent = `// Cloudflare Workers polyfills
globalThis.process ??= { env: {}, cwd: () => '/', platform: 'worker' };
if (typeof require !== 'undefined') {
  const originalRequire = require;
  require = function(id) {
    if (id === 'node:fs' || id === 'fs') return {
      readFileSync: () => {},
      existsSync: () => false,
      writeFileSync: () => {},
      mkdirSync: () => {}
    };
    return originalRequire.apply(this, arguments);
  };
}

${existingContent}`;

// Write back with polyfills
fs.writeFileSync(indexFile, polyfillContent);

console.log('✅ Added polyfills to Worker entry point');