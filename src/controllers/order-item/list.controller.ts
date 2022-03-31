import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const listOrderItemController = async (req: Request, res: Response) => {
  logger('order-item/list', req, res);

  try {
    return res.json(
      await prisma.orderItem.findMany({
        include: {
          order: true,
          product: true,
        },
      }),
    );
  } catch (err: any) {
    console.error('[order-item/list] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}