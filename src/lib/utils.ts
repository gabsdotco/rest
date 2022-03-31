import { Request, Response } from "express"

/** This function gets the resquest and returns a readable log for debugging */
export const logger = (domain: string, req: Request, res: Response) => {
  console.log(
    `[${domain}] Incoming request:`,
    JSON.stringify(
      {
        method: req.method,
        query: req.query,
        body: req.body,
        token: req.headers.authorization,
      },
      null,
      2,
    ),
  )
}