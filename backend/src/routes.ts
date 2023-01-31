import { Router } from "express";
import CreateContactController from "./controllers/CreateContactController";
import DeleteContactController from "./controllers/DeleteContactController";
import GetContactController from "./controllers/GetContactController";
import UpdateContactController from "./controllers/UpdateContactController";

const router = Router();

// Controllers
const getContact = new GetContactController();
const createProduct = new CreateContactController();
const deleteProduct = new DeleteContactController();
const updateProduct = new UpdateContactController();

// Routes
const prefix = "/api/";

router.get(prefix + "contacts", getContact.many);
router.get(prefix + "contacts/:id", getContact.unique);
router.post(prefix + "contacts", createProduct.handle);
router.delete(prefix + "contacts", deleteProduct.handle);
router.patch(prefix + "contacts/:id", updateProduct.handle);

export { router };
