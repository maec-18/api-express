import { Router } from "express";
import {
    getClients,
    getClient,
    postClient,
    putClient,
    patchClient,
    deleteClient,
} from "../controllers/clients.controllers.js";

const router = Router();

// Client list
router.get("/clients", getClients);

//Client endpoint
router.get("/clients/:id", getClient);

// Add
router.post("/clients", postClient);

// Modify
router.put("/clients/:id", putClient);

router.patch("/clients/:id", patchClient);

// Delete
router.delete("/clients/:id", deleteClient);

export default router;
