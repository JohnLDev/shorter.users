declare namespace NodeJS {
  export interface ProcessEnv {
    MS_NAME: string
    NODE_ENV: string
    STAGE?: string
    DB_HOST?: string
    DB_PASS?: string
    DB_USER?: string
    DB_PORT?: number
    DB_DB?: string
  }
}
