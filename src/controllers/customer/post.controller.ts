import type { Request, Response } from "express";

import { PrismaClient, Prisma } from '@prisma/client'

import { logger } from "@/lib/utils";

const prisma = new PrismaClient()

export const createCustomerController = async (req: Request, res: Response) => {
  logger('customer/create', req, res);

  try {
    return res.json(
      await prisma.customer.create({
        data: req.body as Prisma.CustomerCreateInput,
      }),
    );
  } catch (err: any) {
    console.error('[customer/create] Error responding: ', err);

    return res.status(500).json({
      message: err?.message || err
    });
  }
}