import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const listOrderController = async (req: Request, res: Response) => {
  logger('order/list', req, res);

  try {
    return res.json(
      await prisma.order.findMany({
        include: {
          customer: true,
          items: true,
        },
      }),
    );
  } catch (err: any) {
    console.error('[order/list] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}