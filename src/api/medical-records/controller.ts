import { RecordsModel } from "../../schema/records.schema"
import { Request, Response } from "express"


const CreateRecord = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const Record = await RecordsModel.create(payload)

        return res.status(201).send({
            success: true,
            message: "Record created successfully",
            data: Record
        })
    } catch (error: any) {
        return res.status(500).send({
            success: false,
            message: "Could not create Record",
            errors: [error.message]
        })
    }
}

const GetAllRecords = async (req: Request, res: Response) => {
    try {
        const Record = await RecordsModel.find({});
        return res.send({
            success: true,
            data: Record,
            message: "Users retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({ error })
    }
}

const GetRecord = async (req: Request, res: Response) => {
    try {
        const DoctorId = req.params.id
        const Record = await RecordsModel.find({DoctorId})
        return res.status(200).send({
            success: true,
            data: Record,
            message: "User retrieved successfully"
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
        })
    }
}

const UpdateRecord = async (req: Request, res: Response) => {
    try {
        const DoctorId = req.params.id
        const payload = req.body;
        const DeletedRecord = await RecordsModel.findByIdAndUpdate(DoctorId, payload, { new: true });

        if (!DeletedRecord) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: DeletedRecord,
            message: "Delete Successful"
        })
    } catch (error) {
        return res.status(400).send({ error })
    }
}

const DeleteRecord = async (req: Request, res: Response) => {
    try {
        const DoctorId = req.params.id
        const payload = req.body;
        const DeletedRecord = await RecordsModel.findByIdAndDelete(DoctorId, payload, )
        if (!DeletedRecord) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: DeletedRecord,
            message: "Delete Successful"
        })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
export const RecordController = { CreateRecord, GetAllRecords, GetRecord, UpdateRecord, DeleteRecord }