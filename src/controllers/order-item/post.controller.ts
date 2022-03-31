import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const createOrderItemController = async (req: Request, res: Response) => {
  logger('order-item/create', req, res);

  try {
    return res.json(
      await prisma.orderItem.create({
        data: req.body as Prisma.OrderItemCreateInput,
        include: {
          order: true,
          product: true,
        },
      }),
    );
  } catch (err: any) {
    console.error('[order-item/create] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}