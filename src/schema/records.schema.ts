import mongoose, { Schema, Document, Model, Types, HydratedDocument } from "mongoose";
import { PatientDocument } from "./patients.schema";

interface IRecord {
    title: String;
    description: String;
    doctorsReport: String;
    prescriptions: String;
    patient: Types.ObjectId | PatientDocument
}

export const RecordSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    descriptions: {
        type: String
    },
    doctorsReport: {
        type: String,
        required: true
    },
    prescriptions: {
        type: String,
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
}, { timestamps: true }
)

export const RecordsModel = mongoose.model<IRecord>("Records", RecordSchema)

export type RecordDocument = HydratedDocument<typeof RecordSchema>
