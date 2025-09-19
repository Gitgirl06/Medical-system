import express from "express";
import { RecordController } from "./controller";

const Router = express.Router();

Router.post("/", RecordController.CreateRecord);
Router.get("/", RecordController.GetAllRecords);
Router.get("/", RecordController.GetRecord);
Router.put("/:id", RecordController.UpdateRecord);
Router.delete("/:id", RecordController.DeleteRecord);


export default Router;