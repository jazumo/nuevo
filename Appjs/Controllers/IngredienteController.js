import ingrediente from '../Models/IngredienteSchema.js'

export const newIngrediente = (req, res) => {
    const n_ingrediente = new ingrediente({
        name: req.body.n_ingrediente.name,
        price: req.body.n_ingrediente.price,
        sku: req.body.n_ingrediente.sku,
        quantity: req.body.n_ingrediente.quantity,
        exp_date: req.body.n_ingrediente.exp_date,
        buy_date: req.body.n_ingrediente.buy_date,
    })

    try {
        n_ingrediente.save()
        res.status(200).json({ n_ingrediente })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const retrieveIngrediente = (req, res) => {
    try{
        ingrediente.find({}).then((ingredientes) => {
            res.status(200).json({ ingredientes })
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const updateIngrediente = (req, res) => {
    try{
        ingrediente.findByIdAndUpdate("6541ad98209ee2a9e5935508", {name: "Jamon_u"}).then((u_ingredient) =>{
            res.status(200).json({ u_ingredient })
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const deleteIngrediente = (req, res) => {
    try{
        ingrediente.findOneAndDelete({_id: "6542f8ce66e590384eafbb4d"}).then(() => {
            res.status(200).json({})
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}
