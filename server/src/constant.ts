export const DB_NAME = "quizapplication";

export const ERROR_CODE = {
  DUPLICATE_USER: 301,
  INVALID_CREDENTIALS: 302,
  INVALID_FORMAT: 303,
  SERVER_ERROR: 304,
  UNAUTHORIZED_USER: 305,
  DATABASE_INSTANCE: 306,
  PAGE_NOT_FOUND: 307,
} as const;