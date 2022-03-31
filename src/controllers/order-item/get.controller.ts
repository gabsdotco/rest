import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const getOrderItemController = async (req: Request, res: Response) => {
  logger('order-item/get', req, res);

  try {
    const { id } = req.params;

    const orderItem = await prisma.orderItem.findFirst({
      where: {
        id
      },
    });

    if (orderItem) {
      return res.json(
        await prisma.orderItem.findFirst({
          where: { id },
          include: {
            order: true,
            product: true,
          },
        }),
      );
    };

    return res.status(404).json({
      message: 'Order item not found'
    });
  } catch (err: any) {
    console.error('[order-item/get] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}