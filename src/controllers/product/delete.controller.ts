import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient();

export const deleteProductController = async (req: Request, res: Response) => {
  logger('product/delete', req, res);

  try {
    const { id } = req.params;

    const product = await prisma.product.findFirst({
      where: {
        id
      },
    });

    if (product) {
      return res.json(
        await prisma.product.delete({
          where: { id },
        }),
      );
    }

    return res.status(404).json({
      message: 'Product not found'
    });
  } catch (err: any) {
    console.error('[product] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}