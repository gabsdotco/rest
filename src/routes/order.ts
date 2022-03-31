import { Router } from 'express';

import { getOrderController, listOrderController, createOrderController, updateOrderController, deleteOrderController } from '@/controllers/order';

const OrderRouter = Router();

OrderRouter.get('/order/:id', getOrderController);
OrderRouter.get('/order', listOrderController);
OrderRouter.put('/order/:id', updateOrderController);
OrderRouter.post('/order', createOrderController);
OrderRouter.delete('/order/:id', deleteOrderController);

export default OrderRouter;