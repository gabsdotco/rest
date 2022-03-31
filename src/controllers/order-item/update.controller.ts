import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const updateOrderItemController = async (req: Request, res: Response) => {
  logger('order-item/update', req, res);

  try {
    const { id } = req.params;

    const orderItem = await prisma.orderItem.findFirst({
      where: {
        id
      },
    });

    if (orderItem) {
      return res.json(
        await prisma.orderItem.update({
          data: req.body as Prisma.OrderItemUpdateInput,
          where: {
            id,
          },
          include: {
            order: true,
            product: true,
          },
        }),
      );
    }

    return res.status(404).json({
      message: 'Order item not found'
    });
  } catch (err: any) {
    console.error('[order-item/update] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}