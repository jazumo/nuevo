import pizza from '../Models/PizzaSchema.js'

export const newPizza = (req, res) => {
    const n_pizza = new pizza({
        name: req.body.n_pizza.name,
        price: req.body.n_pizza.price,
        sku: req.body.n_pizza.sku,
        ingredientes: req.body.n_pizza.ingredientes,
        tamaño: req.body.n_pizza.tamaño
    })

    try {
        n_pizza.save()
        res.status(200).json({ n_pizza })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const retrievePizza = (req, res) => {
    try{
        pizza.find({}).then((pizzas) => {
            res.status(200).json({ pizzas })
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const updatePizza = (req, res) => {
    try{
        pizza.findByIdAndUpdate("6541aee4da05cc4c9f0bc321", {name: "Pepperoni_u"}).then((u_pizza) =>{
            res.status(200).json({ u_pizza })
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const deletePizza = (req, res) => {
    try{
        pizza.findOneAndDelete({_id: "6542f8f466e590384eafbb4f"}).then(() => {
            res.status(200).json({})
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}
