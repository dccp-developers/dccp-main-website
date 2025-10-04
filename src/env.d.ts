/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FACEBOOK_PAGE_ID: string;
  readonly FACEBOOK_ACCESS_TOKEN: string;
  readonly FACEBOOK_APP_ID: string;
  readonly FACEBOOK_APP_SECRET: string;
  readonly SITE_URL: string;
  readonly SITE_NAME: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
