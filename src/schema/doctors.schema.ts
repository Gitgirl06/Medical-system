import mongoose, { Schema, Document, Model, HydratedDocument, HydratedDocumentFromSchema } from "mongoose"

interface IDoctor {
    fullname: string;
    phone: string;
    email: string;
    field: string
}

export const DoctorSchema : Schema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    field: {
        type: String,
        required: true
    }
},{timestamps:true}
)

export const DoctorsModel = mongoose.model<IDoctor>("Doctors", DoctorSchema)

export type DoctorDocument = HydratedDocument<typeof DoctorSchema>


