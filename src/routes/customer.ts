import { Router } from 'express';

import { getCustomerController, listCustomerController, createCustomerController, updateCustomerController, deleteCustomerController } from '@/controllers/customer';

const CustomerRouter = Router();

CustomerRouter.get('/customer/:id', getCustomerController);
CustomerRouter.get('/customer', listCustomerController);
CustomerRouter.put('/customer/:id', updateCustomerController);
CustomerRouter.post('/customer', createCustomerController);
CustomerRouter.delete('/customer/:id', deleteCustomerController);

export default CustomerRouter;