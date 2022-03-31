import { Router } from 'express';

import { getProductController, listProductController, createProductController, updateProductController, deleteProductController } from '@/controllers/product';

const ProductRouter = Router();

ProductRouter.get('/product/:id', getProductController);
ProductRouter.get('/product', listProductController);
ProductRouter.put('/product/:id', updateProductController);
ProductRouter.post('/product', createProductController);
ProductRouter.delete('/product/:id', deleteProductController);

export default ProductRouter;