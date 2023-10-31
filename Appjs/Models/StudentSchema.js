//EJEMPLO DE MODELO
import mongoose, { Schema } from 'mongoose'

//Se crea esquema de Mongoose
const AllStudents = new mongoose.Schema({
    //Se agregan las caracteristicas del esquema
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    career: {
        type: String,
        required: true
    }
})

const student = mongoose.model('Student', AllStudents)

export default student