declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    NODE_ENV: string;
    DATABASE_URL : string;
    JWT_SECRET: string;
    JWT_EXPIRATION: string;
  }
}
