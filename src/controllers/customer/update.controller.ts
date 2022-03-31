import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const updateCustomerController = async (req: Request, res: Response) => {
  logger('customer/update', req, res);

  try {
    const { id } = req.params;

    const customer = await prisma.customer.findFirst({
      where: {
        id
      },
    });

    if (customer) {
      return res.json(
        await prisma.customer.update({
          data: req.body as Prisma.CustomerUpdateInput,
          where: {
            id,
          },
        }),
      );
    };

    return res.status(404).json({
      message: 'Customer not found'
    });
  } catch (err: any) {
    console.error('[customer/update] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}