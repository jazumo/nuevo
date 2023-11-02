import mongoose, { Schema } from 'mongoose'
import ingrediente from '../Models/IngredienteSchema.js'

const allPizzas = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    sku:{
        type: String,
        required: true
    },
    ingredientes:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Ingrediente',
        required: true
    }],
    tamaño:{
        type: String,
        required: true
    }
})

const pizza = mongoose.model('Pizza', allPizzas)

export default pizza