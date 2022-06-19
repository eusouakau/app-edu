const express = require('express');
const bcrypt = require('bcryptjs');
const authConfig = require('../../config/config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/User');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
}

router.post('/cadastro', async (req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email })) 
            return res.send(400).send({ error: 'Email já cadastrado!'});

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user, token: generateToken({ id: user.id }) });
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
})

module.exports = app => app.use('/autenticacao', router);