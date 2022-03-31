import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const updateOrderController = async (req: Request, res: Response) => {
  logger('order/update', req, res);

  try {
    const { id } = req.params;

    const order = await prisma.order.findFirst({
      where: {
        id
      },
    });

    if (order) {
      return res.json(
        await prisma.order.update({
          data: req.body as Prisma.OrderUpdateInput,
          where: {
            id,
          },
          include: {
            customer: true,
            items: true,
          },
        }),
      );
    }

    return res.status(404).json({
      message: 'Order not found'
    });
  } catch (err: any) {
    console.error('[order/update] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}