const express = require('express');
const bcrypt = require('bcryptjs');
const authConfig = require('../config.json');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/User');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
}

router.post('/cadastrar', async (req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email })) 
            return res.send(400).send({ error: 'Email já cadastrado!'});

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send(201)({ user, token: generateToken({ id: user.id }), message: 'Usuário criado com sucesso!' });
    } catch (err) {
        return res.status(400).send({ error: 'Falha aoa cadastrar' });
    }
});

router.post('/login', async (req, res) => { 
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user) return res.status(400).send({ error: 'Usuário não encontrado!' });

    if(!await bcrypt.compare(password, user.password)) 
        return res.status(400).send({ error: 'Senha incorreta!' });

    user.password = undefined;

    const token = generateToken({ id: user.id });

    res.send({ user, token });
});

router.post('/recuperar-senha', async(req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) return res.status(400).send({ error: 'Usuário não encontrado!' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now
            }
        });

    } catch(err) {
        res.status(400).send({ error: 'Erro ao recuperar senha, tente novamente' });
    }
});

router.get('/', async (req, res) => {
    try{
        const users = await User.find();

        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params.id;

    try{
        const user = await User.findOne({_id: id});

        if (!user) {
            return res.status(404).json({error: 'Usuário não encontrado'});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = {
        name,
        email
    };

    try {
        updatedUser = await User.findOneAndUpdate({_id: id}, user);

        if (updateUser.mathedCount === 0) {
            return res.status(404).json({error: 'Usuário não encontrado'});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params.id;
    const { name, email, password } = req.body;

    const user = {
        name,
        email,
        password
        // role,
        // school,
        // grade,
        // class
    };

    if(!user) {
        return res.status(422).json({error: 'Usuário não encontrado'});
    }

    try {
        
        await User.findOneAndDelete({_id: id});

        res.status(200).json({message: 'Usuário excuído com sucesso'});

    } catch (error) {

        res.status(500).json({error: error.message});
    }

});

module.exports = router;