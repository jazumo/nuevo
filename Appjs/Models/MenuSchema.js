import mongoose, { Schema } from 'mongoose'
import Pizza from '../Models/PizzaSchema.js'

const allMenus = new mongoose.Schema({
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

    combo:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Pizza',
        required: true
    }],
})

const menu = mongoose.model('Menu', allMenus)

export default menu
