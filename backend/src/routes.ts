import { Router } from 'express';
import CreateContactController from './controllers/CreateContactController';
import DeleteContactController from './controllers/DeleteContactController';
import GetContactController from './controllers/GetContactController';
import UpdateContactController from './controllers/UpdateContactController';

const router = Router();

// Controllers
const getContact = new GetContactController();
const createProduct = new CreateContactController();
const deleteProduct = new DeleteContactController();
const updateProduct = new UpdateContactController();

// Routes
router.get('/contacts', getContact.many);
router.get('/contacts/:id', getContact.unique);
router.post('/contacts', createProduct.handle);
router.delete('/contacts', deleteProduct.handle);
router.patch('/contacts/:id', updateProduct.handle);


export { router };