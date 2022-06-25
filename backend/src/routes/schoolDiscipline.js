const router = require('express').Router();
const SchoolDiscipline = require('../models/SchoolDiscipline');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);



router.post('/', async (req, res) => {
    const { name, area } = req.body;

    if (!name || !area ) {
        res.status(422).json({
            error: 'Dados incompletos'
        });
        return;
    }

    const schoolDiscipline = {
        name,
        area
    }

    try {

        await SchoolDiscipline.create(schoolDiscipline);

        res.status(201).json({message: 'Disciplina criada com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const schoolDisciplines = await SchoolDiscipline.find();

        res.status(200).json(schoolDisciplines);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params.id;

    try{
        const schoolDiscipline = await SchoolDiscipline.findOne({_id: id});

        if (!schoolDiscipline) {
            return res.status(404).json({error: 'Disciplina não encontrada'});
        }

        res.status(200).json(schoolDiscipline);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { name, area} = req.body;

    const schoolDiscipline = {
        name,
        area, 
    };

    try {
        updatedSchoolDiscipline = await SchoolDiscipline.findOneAndUpdate({_id: id}, schoolDiscipline);

        if (updateSchoolDiscipline.mathedCount === 0) {
            return res.status(404).json({error: 'Disciplina não encontrada'});
        }

        res.status(200).json(schoolDiscipline);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { name, area, content } = req.body;

    const schoolDiscipline = {
        name,
        area, 
        content, 
        schoolDiscipline
    };

    if(!schoolDiscipline) {
        return res.status(422).json({error: 'Disciplina não encontrada'});
    }

    try {
        
        await SchoolDiscipline.findOneAndDelete({_id: id});

        res.status(200).json({message: 'Disciplina deletada com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

});

module.exports = router;