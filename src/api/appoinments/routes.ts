import express from "express";
import { appointmentController } from "./controller";

const Router = express.Router();

Router.post("/", appointmentController.Createappointment);
Router.get("/", appointmentController.GetAllappointments, appointmentController.Getappointment);
Router.put("/:id", appointmentController.Updateappointment);
Router.delete("/:id", appointmentController.Deleteappointment);


export default Router;