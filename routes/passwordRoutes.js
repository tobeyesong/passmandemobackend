/** @format */

import express from "express";
const router = express.Router();
import {
  getPasswords,
  getPasswordById,
  deletePassword,
  createPassword,
  updatePassword,
} from "../controllers/passwordsControllers.js";

router.route("/").get(getPasswords).post(createPassword);
router
  .route("/:id")
  .get(getPasswordById)
  .delete(deletePassword)
  .put(updatePassword);

export default router;
