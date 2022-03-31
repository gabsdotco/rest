import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const createOrderController = async (req: Request, res: Response) => {
  logger('order/create', req, res);

  try {
    return res.json(
      await prisma.order.create({
        data: req.body as Prisma.OrderCreateInput,
        include: {
          customer: true,
          items: true,
        },
      }),
    );
  } catch (err: any) {
    console.error('[order/create] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}