const router = require('express').Router();
const SchoolClass = require('../models/SchoolClass');


router.post('/', async (req, res) => {
    const { name, school, grade} = req.body;

    if (!name || !school || !grade) {
        res.status(422).json({
            error: 'Dados incompletos'
        });
        return;
    }

    const schoolClass = {
        name,
        school, 
        grade,
        students
    }

    try {

        await SchoolClass.create(schoolClass);

        res.status(201).json({message: 'Turma criada com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const schoolClasses = await SchoolClass.find();

        res.status(200).json(schoolClasses);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try{
        const schoolClass = await SchoolClass.findOne({_id: id});

        if (!schoolClass) {
            return res.status(404).json({error: 'Turma não encontrada'});
        }

        res.status(200).json(schoolClass);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:name', async (req, res) => {
    const name = req.params.name;

    try{
        const schoolClass = await SchoolClass.findOne({name: name});

        if (!schoolClass) {
            return res.status(404).json({error: 'Turma não encontrada'});
        }

        res.status(200).json(schoolClass);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, students, grade } = req.body;

    const schoolClass = {
        name,
        students, 
        grade
    };

    try {
        updatedSchoolClass = await schoolClass.findOneAndUpdate({_id: id}, schoolClass);

        if (updatedschoolClass.mathedCount === 0) {
            return res.status(404).json({error: 'Turma não encontrada'});
        }

        res.status(200).json(schoolClass);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params.id;

    const schoolClass = await SchoolClass.findOne({_id: id});

    if(!schoolClass) {
        return res.status(422).json({error: 'Turma não encontrada'});
    }

    try {
        
        await schoolClass.findOne({_id: id});

        res.status(200).json({message: 'Turma deletada com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

});

module.exports = router;