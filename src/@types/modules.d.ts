declare namespace NodeJS {
  export interface ProcessEnv {
    MS_NAME: string
    NODE_ENV: string
    STAGE?: string
  }
}
