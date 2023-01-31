import { Router } from 'express';
import CreateContactController from './controllers/CreateContactController';

const router = Router();

// Controllers
const createProduct = new CreateContactController();

// Routes
router.post('/contacts', createProduct.handle);


export { router };