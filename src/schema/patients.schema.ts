import mongoose, { Schema, Document, Model, HydratedDocument } from "mongoose";

interface IPatient {
    fullname: string;
    phone: string;
    age: number;
    email: string;
    height: string;
    weight: string;
}

export const PatientSchema: Schema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    height: {
        type: String,
    },
    weight: {
        type: String
    }
}, { timestamps: true }
)

export const PatientModel = mongoose.model<IPatient>("Patients", PatientSchema)

export type PatientDocument = HydratedDocument<typeof PatientSchema>
