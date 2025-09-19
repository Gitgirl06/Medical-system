import mongoose, { Schema, Document, Model, Types, HydratedDocument } from "mongoose";
import { PatientDocument } from "./patients.schema";
import { DoctorDocument } from "./doctors.schema";
import { RecordDocument } from "./records.schema";

export enum StatusEnum {
    Pending = "pending",
    Completed = "completed",
    Cancelled = "cancelled"
}

interface IAppointment {
    appointmentDate: Date;
    Status: StatusEnum;
    patient: Types.ObjectId | PatientDocument;
    doctor: Types.ObjectId | DoctorDocument;
    record: Types.ObjectId | RecordDocument;
}

export const AppointmentSchema: Schema = new Schema({
    appointmentDate: {
        type: Date,
        required: true
    },
    Status: {
        type: String,
        enum: Object.values(StatusEnum),
        default: StatusEnum.Pending,
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    Record: {
        type: Schema.Types.ObjectId,
        ref: "Record",
        required: true
    },
}, { timestamps: true }
)

export const AppointmentsModel = mongoose.model<IAppointment>("Appointments", AppointmentSchema)

export type AppointmentDocument = HydratedDocument<typeof AppointmentSchema>