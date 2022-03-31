import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const getOrderController = async (req: Request, res: Response) => {
  logger('order/get', req, res);

  try {
    const { id } = req.params;

    const order = await prisma.order.findFirst({
      where: {
        id
      },
    });

    if (order) {
      return res.json(
        await prisma.order.findFirst({
          where: { id },
          include: {
            customer: true,
            items: true,
          },
        }),
      );
    };

    return res.status(404).json({
      message: 'Order not found'
    });
  } catch (err: any) {
    console.error('[order/get] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}