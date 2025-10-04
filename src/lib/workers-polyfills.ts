// Comprehensive polyfills for Cloudflare Workers runtime
// This file should be imported first in the entry point

// Node.js polyfills
if (typeof globalThis.process === 'undefined') {
  globalThis.process = {
    env: {},
    nextTick: (cb: (...args: any[]) => void, ...args: any[]) => {
      setTimeout(() => cb(...args), 0);
    },
    cwd: () => '/',
    platform: 'worker',
    arch: 'wasm',
    version: '20.0.0',
    versions: {
      node: '20.0.0'
    }
  };
}

// fs polyfill
if (typeof require !== 'undefined') {
  const originalRequire = require;
  require = function(id: string) {
    if (id === 'fs' || id === 'node:fs' || id === 'fs/promises' || id === 'node:fs/promises') {
      return {
        readFile: () => { throw new Error('fs.readFile is not available in Workers'); },
        writeFile: () => { throw new Error('fs.writeFile is not available in Workers'); },
        readFileSync: () => { throw new Error('fs.readFileSync is not available in Workers'); },
        writeFileSync: () => { throw new Error('fs.writeFileSync is not available in Workers'); },
        existsSync: () => false,
        mkdirSync: () => {},
        readdirSync: () => [],
        statSync: () => ({
          isFile: () => false,
          isDirectory: () => false,
          size: 0,
          mtime: new Date(),
          atime: new Date(),
          ctime: new Date()
        })
      };
    }
    if (id === 'path' || id === 'node:path') {
      return {
        join: (...paths: string[]) => paths.join('/').replace(/\/+/g, '/'),
        resolve: (...paths: string[]) => paths.join('/').replace(/\/+/g, '/'),
        dirname: (p: string) => p.split('/').slice(0, -1).join('/') || '.',
        basename: (p: string) => p.split('/').pop() || '',
        extname: (p: string) => {
          const lastDot = p.lastIndexOf('.');
          return lastDot === -1 ? '' : p.slice(lastDot);
        },
        parse: (p: string) => {
          const dir = p.split('/').slice(0, -1).join('/');
          const base = p.split('/').pop() || '';
          const ext = base.includes('.') ? base.slice(base.lastIndexOf('.')) : '';
          const name = ext ? base.slice(0, -ext.length) : base;
          return { dir, base, ext, name };
        },
        normalize: (p: string) => p.replace(/\/+/g, '/'),
        sep: '/',
        delimiter: ':'
      };
    }
    if (id === 'url' || id === 'node:url') {
      return {
        URL: globalThis.URL,
        URLSearchParams: globalThis.URLSearchParams,
        fileURLToPath: (url: string) => url.replace('file://', ''),
        pathToFileURL: (path: string) => `file://${path}`
      };
    }
    return originalRequire.apply(this, arguments as any);
  };
}

// Buffer polyfill
if (typeof globalThis.Buffer === 'undefined') {
  globalThis.Buffer = {
    from: (data: string | ArrayBuffer, encoding?: string) => {
      if (typeof data === 'string') {
        return new TextEncoder().encode(data);
      }
      return new Uint8Array(data);
    },
    isBuffer: () => false,
    isEncoding: () => false,
    alloc: (size: number) => new Uint8Array(size),
    concat: (buffers: Uint8Array[]) => {
      const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (const buffer of buffers) {
        result.set(buffer, offset);
        offset += buffer.length;
      }
      return result;
    }
  } as any;
}

// SetImmediate polyfill
if (typeof globalThis.setImmediate === 'undefined') {
  globalThis.setImmediate = (cb: (...args: any[]) => void, ...args: any[]) => {
    setTimeout(() => cb(...args), 0);
  };
}

// ClearImmediate polyfill
if (typeof globalThis.clearImmediate === 'undefined') {
  globalThis.clearImmediate = () => {};
}

// Web Crypto API polyfill for Node.js crypto module
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {
    getRandomValues: (arr: Uint8Array) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256);
      }
      return arr;
    },
    subtle: {} as any
  };
}