import menu from '../Models/MenuSchema.js'

export const newMenu = (req, res) => {
    const n_menu = new menu({
        name: req.body.n_menu.name,
        price: req.body.n_menu.price,
        sku: req.body.n_menu.sku,
        combo: req.body.n_menu.combo
    })

    try {
        n_menu.save()
        res.status(200).json({ n_menu })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const retrieveMenu = (req, res) => {
    try{
        menu.find({}).then((menus) => {
            res.status(200).json({ menus })
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const updateMenu = (req, res) => {
    try{
        menu.findByIdAndUpdate("6542f32e9f4af33142574d10", {name: "Pizza Jamon+Pepperoni_u"}).then((u_menu) =>{
            res.status(200).json({ u_menu })
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

export const deleteMenu = (req, res) => {
    try{
        menu.findOneAndDelete({_id: "6542f90f66e590384eafbb51"}).then(() => {
            res.status(200).json({})
        })
    }catch(e){
        res.status(500).json({ error: e })
    }
}

