import express from "express";
import { PatientController } from "./controller";

const Router = express.Router();

Router.post("/", PatientController.CreatePatient);
Router.get("/", PatientController.GetAllPatients);
Router.get("/:id", PatientController.GetPatient)
Router.put("/:id", PatientController.UpdatePatient);
Router.delete("/:id", PatientController.DeletePatient);

export default Router;
