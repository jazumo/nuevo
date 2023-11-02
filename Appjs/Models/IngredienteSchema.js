import mongoose, { Schema } from 'mongoose'

const allIngredientes = new mongoose.Schema({
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
    quantity:{
        type: Number,
        required: true
    },
    exp_date:{
        type: String,
        required: true
    },
    buy_date:{
        type: String,
        required: true
    },
})

const ingrediente = mongoose.model('Ingrediente', allIngredientes)

export default ingrediente
