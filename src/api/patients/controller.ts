
import { Request, Response } from "express"
import { PatientModel } from "../../schema/patients.schema";


const CreatePatient = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const patient = await PatientModel.create(payload)

        return res.status(201).send({
            success: true,
            message: "Patient created successfully",
            data: patient
        })
    } catch (error: any) {
        return res.status(500).send({
            success: false,
            message: "Could not create patient",
            errors: [error.message]
        })
    }
}

const GetAllPatients = async (req: Request, res: Response) => {
    try {
        const patient = await PatientModel.find({});
        return res.send({
            success: true,
            data: patient,
            message: "Users retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({ error })
    }
}

const GetPatient = async (req: Request, res: Response) => {
    try {
        const patientId = req.params.id
        const patient = await PatientModel.findById(patientId)

        if(!patient){
            return res.status(404).send({
                success: false,
                message: "Patient not found"
            })
        }
        return res.status(200).send({
            success: true,
            data: patient,
            message: "User retrieved successfully"
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
        })
    }
}

const UpdatePatient = async (req: Request, res: Response) => {
    try {
        const patientId = req.params.id
        const payload = req.body;
        
        const updatedPatient = await PatientModel.findByIdAndUpdate(patientId, payload, {new: true});

        if(!updatedPatient){
            return res.status(404).send({
                success: false,
                message: "Patient not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: updatedPatient,
            message: "Update Successful"
        })
    } catch (error) {
        return res.status(400).send({ error })
    }
}

const DeletePatient = async (req: Request, res: Response) => {
    try {
        const patientId = req.params.id;

        const deletedPatient = await PatientModel.findByIdAndDelete(patientId);

        if(!deletedPatient){
            return res.status(404).send({
                success: false,
                message: "Patient not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Deletion Complete",
        })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
export const PatientController = { CreatePatient, GetPatient, GetAllPatients, UpdatePatient, DeletePatient }