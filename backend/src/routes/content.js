const router = require('express').Router();
const Content = require('../models/Content');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post('/', async (req, res) => {
    const { title, description, link, schoolDiscipline} = req.body;

    if (!title || !description || !link || !schoolDiscipline) {
        res.status(422).json({
            error: 'Dados incompletos'
        });
        return;
    }

    const content = {
        title,
        description, 
        link, 
        schoolDiscipline
    }

    try {

        await Content.create(content);

        res.status(201).json({message: 'Conteúdo criado com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const contents = await Content.find();

        res.status(200).json(contents);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params.id;

    try{
        const content = await Content.findOne({_id: id});

        if (!content) {
            return res.status(404).json({error: 'Conteúdo não encontrado'});
        }

        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { title, description } = req.body;

    const content = {
        title,
        description
    };

    try {
        updatedContent = await Content.findOneAndUpdate({_id: id}, content);

        if (updateContent.mathedCount === 0) {
            return res.status(404).json({error: 'Conteúdo não encontrado'});
        }

        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { title, description, link, schoolDiscipline } = req.body;

    const content = {
        title,
        description, 
        link, 
        schoolDiscipline
    };

    if(!content) {
        return res.status(422).json({error: 'Conteúdo não encontrado'});
    }

    try {
        
        await Content.findOneAndDelete({_id: id});

        res.status(200).json({message: 'Conteúdo deletado com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

});

module.exports = router;