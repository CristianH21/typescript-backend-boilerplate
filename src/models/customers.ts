import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
    username: string;
    name: string;
    address: string;
    birthdate: string;
    email: string;
    active: boolean;
  }

const CustomerSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    birthdate: { type: String, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, required: true }
});

export default mongoose.model('Customer', CustomerSchema);