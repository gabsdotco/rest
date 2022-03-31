import { Router } from 'express';

import { getOrderItemController, listOrderItemController, createOrderItemController, updateOrderItemController, deleteOrderItemController } from '@/controllers/order-item';

const OrderItemRouter = Router();

OrderItemRouter.get('/order-item/:id', getOrderItemController);
OrderItemRouter.get('/order-item', listOrderItemController);
OrderItemRouter.put('/order-item/:id', updateOrderItemController);
OrderItemRouter.post('/order-item', createOrderItemController);
OrderItemRouter.delete('/order-item/:id', deleteOrderItemController);

export default OrderItemRouter;