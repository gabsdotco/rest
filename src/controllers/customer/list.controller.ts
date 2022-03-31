import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const listCustomerController = async (req: Request, res: Response) => {
  logger('customer/list', req, res);

  try {
    return res.json(
      await prisma.customer.findMany({
        include: {
          orders: {
            include: {
              items: true,
            }
          },
        },
      }),
    );
  } catch (err: any) {
    console.error('[user/list] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}