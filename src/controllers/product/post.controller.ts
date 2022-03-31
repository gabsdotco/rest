import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const createProductController = async (req: Request, res: Response) => {
  logger('product/create', req, res);

  try {
    return res.json(
      await prisma.product.create({
        data: req.body as Prisma.ProductCreateInput,
      }),
    );
  } catch (err: any) {
    console.error('[product/create] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}