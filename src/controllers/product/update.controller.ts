import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const updateProductController = async (req: Request, res: Response) => {
  logger('product/update', req, res);

  try {
    const { id } = req.params;

    const product = await prisma.product.findFirst({
      where: {
        id
      },
    });

    if (product) {
      return res.json(
        await prisma.product.update({
          data: req.body as Prisma.ProductUpdateInput,
          where: {
            id,
          },
        }),
      );
    };

    return res.status(404).json({
      message: 'Product not found'
    });
  } catch (err: any) {
    console.error('[product/update] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}