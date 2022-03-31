import { Router } from 'express';

import CustomerRouter from './customer';
import ProductRouter from './product';
import OrderRouter from './order';
import OrderItemRouter from './order-item';

const router = Router();

// Root routes
router.use('/', CustomerRouter);
router.use('/', ProductRouter);
router.use('/', OrderRouter);
router.use('/', OrderItemRouter);

export default router;