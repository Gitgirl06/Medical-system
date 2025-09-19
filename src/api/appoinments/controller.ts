
import { Request, Response } from "express"
import { AppointmentsModel } from "../../schema/appointments.schema";


const Createappointment = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const appointment = await AppointmentsModel.create(payload)

        return res.status(201).send({
            success: true,
            message: "appointment created successfully",
            data: appointment
        })
    } catch (error: any) {
        return res.status(500).send({
            success: false,
            message: "Could not create appointment",
            errors: [error.message]
        })
    }
}

const GetAllappointments = async (req: Request, res: Response) => {
    try {
        const appointment = await AppointmentsModel.find({});
        return res.send({
            success: true,
            data: appointment,
            message: "Users retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({ error })
    }
}

const Getappointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id
        const appointment = await AppointmentsModel.findById(appointmentId)

        if(!appointment){
            return res.status(404).send({
                success: false,
                message: "appointment not found"
            })
        }
        return res.status(200).send({
            success: true,
            data: appointment,
            message: "User retrieved successfully"
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
        })
    }
}

const Updateappointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id
        const payload = req.body;
        
        const updatedappointment = await AppointmentsModel.findByIdAndUpdate(appointmentId, payload, {new: true});

        if(!updatedappointment){
            return res.status(404).send({
                success: false,
                message: "appointment not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: updatedappointment,
            message: "Update Successful"
        })
    } catch (error) {
        return res.status(400).send({ error })
    }
}

const Deleteappointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id;

        const deletedappointment = await AppointmentsModel.findByIdAndDelete(appointmentId);

        if(!deletedappointment){
            return res.status(404).send({
                success: false,
                message: "appointment not found"
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
export const appointmentController = { Createappointment, Getappointment, GetAllappointments, Updateappointment, Deleteappointment }