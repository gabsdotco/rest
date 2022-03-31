import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient();

export const deleteOrderController = async (req: Request, res: Response) => {
  logger('order/delete', req, res);

  try {
    const { id } = req.params;

    const order = await prisma.order.findFirst({
      where: {
        id
      },
    });

    if (order) {
      return res.json(
        await prisma.order.delete({
          where: { id },
        }),
      );
    }

    return res.status(404).json({
      message: 'Order not found'
    });
  } catch (err: any) {
    console.error('[order] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}