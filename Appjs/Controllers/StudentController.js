//EJEMPLO DE CONTROLADOR
import student from '../Models/StudentSchema.js'

export const newStudent = (req, res) => {
    const n_student = new student({
        name: req.body.n_student.name,
        age: req.body.n_student.age,
        career: req.body.n_student.career
    })

    try {
        n_student.save()
        res.status(200).json({ n_student })
    }catch(e){
        res.status(500).json({ error: e })
    }
}