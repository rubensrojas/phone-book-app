import { Router } from 'express';
import CreateContactController from './controllers/CreateContactController';
import DeleteContactController from './controllers/DeleteContactController';
import UpdateContactController from './controllers/UpdateContactController';

const router = Router();

// Controllers
const createProduct = new CreateContactController();
const deleteProduct = new DeleteContactController();
const updateProduct = new UpdateContactController();

// Routes
router.post('/contacts', createProduct.handle);
router.delete('/contacts', deleteProduct.handle);
router.patch('/contacts', updateProduct.handle);


export { router };