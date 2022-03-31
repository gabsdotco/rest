import type { Request, Response } from "express";

import { PrismaClient } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const getCustomerController = async (req: Request, res: Response) => {
  logger('customer/get', req, res);

  try {
    const { id } = req.params;

    const customer = await prisma.customer.findFirst({
      where: {
        id
      },
    });

    if (customer) {
      return res.json(
        await prisma.customer.findFirst({
          where: { id },
          include: {
            orders: {
              include: {
                items: true,
              }
            },
          },
        }),
      );
    };

    return res.status(404).json({
      message: 'Customer not found'
    });
  } catch (err: any) {
    console.error('[user/get] Error responding: ', err);

    return res.status(500).send({
      message: err?.message || err
    });
  }
}