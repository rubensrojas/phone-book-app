import { Router } from 'express';
import CreateContactController from './controllers/CreateContactController';
import DeleteContactController from './controllers/DeleteContactController';

const router = Router();

// Controllers
const createProduct = new CreateContactController();
const deleteProduct = new DeleteContactController();

// Routes
router.post('/contacts', createProduct.handle);
router.delete('/contacts', deleteProduct.handle);


export { router };