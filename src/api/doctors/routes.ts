import express from "express";
import { DoctorController } from "./controller";

const Router = express.Router();

Router.post("/", DoctorController.CreateDoctor);
Router.get("/", DoctorController.GetAllDoctors, DoctorController.GetDoctor);
Router.put("/:id", DoctorController.UpdateDoctor);
Router.delete("/:id", DoctorController.DeleteDoctor);


export default Router;