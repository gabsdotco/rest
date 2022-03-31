import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient();

export const deleteOrderItemController = async (req: Request, res: Response) => {
  logger('order-item/delete', req, res);

  try {
    const { id } = req.params;

    const orderItem = await prisma.orderItem.findFirst({
      where: {
        id
      },
    });

    if (orderItem) {
      return res.json(
        await prisma.orderItem.delete({
          where: { id },
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
    console.error('[order-item] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}