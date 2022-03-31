import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const getProductController = async (req: Request, res: Response) => {
  logger('product/get', req, res);

  try {
    const { id } = req.params;

    const product = await prisma.product.findFirst({
      where: {
        id
      },
    });

    if (product) {
      return res.json(
        await prisma.product.findFirst({
          where: { id },
        }),
      );
    };

    return res.status(404).json({
      message: 'Product not found'
    });
  } catch (err: any) {
    console.error('[product/get] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}