import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose'

export default class DBConfig {

    private URI: string = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`

    async connect () {
        return await mongoose.connect(this.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    }

    async disconnect () {
        return await mongoose.disconnect()
    }
}