import { DoctorsModel } from "../../schema/doctors.schema";
import { Request, Response } from "express"


const CreateDoctor = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const Doctor = await DoctorsModel.create(payload)

        return res.status(201).send({
            success: true,
            message: "Doctor created successfully",
            data: Doctor
        })
    } catch (error: any) {
        return res.status(500).send({
            success: false,
            message: "Could not create Doctor",
            errors: [error.message]
        })
    }
}

const GetAllDoctors = async (req: Request, res: Response) => {
    try {
        const Doctor = await DoctorsModel.find({});
        return res.send({
            success: true,
            data: Doctor,
            message: "Users retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({ error })
    }
}

const GetDoctor = async (req: Request, res: Response) => {
    try {
        const DoctorId = req.params.id
        const Doctor = await DoctorsModel.findById(DoctorId)
        return res.status(200).send({
            success: true,
            data: Doctor,
            message: "User retrieved successfully"
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
        })
    }
}

const UpdateDoctor = async (req: Request, res: Response) => {
    try {
        const DoctorId = req.params.id
        const payload = req.body;
        const UpdatedDoctor = await DoctorsModel.findByIdAndUpdate(DoctorId, payload, { new:true } )
        if (!UpdatedDoctor) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: UpdatedDoctor,
            message: "Update Successful"
        })
    } catch (error) {
        return res.status(400).send({ error })
    }
}

const DeleteDoctor = async (req: Request, res: Response) => {
    try {
        const DoctorId = req.params.id
        const payload = req.body
        const DeletedDoctor = await DoctorsModel.findByIdAndDelete(DoctorId, payload)
        if (!DeletedDoctor) {
        return res.status(404).send({
            success: false,
            message: "User Not Found"
        });
        }
        return res.status(200).json({
            success: true,
            message: "Deletion Complete",
        })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
export const DoctorController = { CreateDoctor, GetAllDoctors, GetDoctor, UpdateDoctor, DeleteDoctor }