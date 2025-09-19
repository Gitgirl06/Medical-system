import express, {Request, Response} from 'express'
import PatientRouter from "./patients/routes"

const ApiRouter = express.Router()

ApiRouter.get("/test", (req: Request, res: Response)=>{
    res.status(200).send("Hello Kyma")
})
ApiRouter.use("/patients", PatientRouter)

export default ApiRouter