const router = require('express').Router();
const Forum = require('../models/Forum');

router.post('/', async (req, res) => {
    const { title, content, comment, user, create_at} = req.body;

    if (!title || !content || !comment || !user || !create_at) {
        res.status(422).json({
            error: 'Dados incompletos'
        });
        return;
    }

    const forum = {
        title,
        content, 
        comment, 
        user,
        create_at
    }

    try {

        await Forum.create(forum);

        res.status(201).json({message: 'Comentário criado com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const foruns = await Forum.find();

        res.status(200).json(foruns);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try{
        const forum = await Forum.findOne({_id: id});

        if (!forum) {
            return res.status(404).json({error: 'Comentário não encontrado'});
        }

        res.status(200).json(forum);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:content', async (req, res) => {
    const content = req.params.content;
    try{
        const forum = await Forum.findOne({content: content});

        if (!forum) {
            return res.status(404).json({error: 'Conteúdo não possui comentários'});
        }

        res.status(200).json(forum);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:user', async (req, res) => {
    const { user } = req.params.user;
    const forum = await Forum.findOne({user: user});

    if (!forum) {
        return res.status(404).json({error: 'Usuário não possui comentários'});
    }

    res.status(200).json(forum);
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { title, comment } = req.body;

    const forum = {
        title,
        comment
    };

    try {
        updatedForum = await Forum.findOneAndUpdate({id: id}, forum);

        if (updateForum.mathedCount === 0) {
            return res.status(404).json({error: 'Comentário não encontrado'});
        }

        res.status(200).json(forum);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { title, content, comment, user, create_at } = req.body;

    const forum = {
        title,
        content, 
        comment, 
        user,
        create_at
    };

    if(!forum) {
        return res.status(422).json({error: 'Comentário não encontrado'});
    }

    try {
        
        await Forum.findOneAndDelete({id: id});

        res.status(200).json({message: 'Comentário deletado com sucesso!'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

});

module.exports = router;