import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const listProductController = async (req: Request, res: Response) => {
  logger('product/list', req, res);

  try {
    return res.json(
      await prisma.product.findMany(),
    );
  } catch (err: any) {
    console.error('[product/list] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}