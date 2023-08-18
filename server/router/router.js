import { Router } from "express";

import { getMessageFromClient } from "../controllers/telegramm-bot-api/telegramm-response";
import mongoose from "mongoose";
import Commentaries from "../models/commentaries.js";

const router = Router();

router.post('/api/telegram-bot-api', getMessageFromClient);

router.post('/api/commentaries', async (req, res) => {
    try {
        const comment = new Commentaries ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.phone,
            state: req.body.state,
            email: req.body.email,
            text: req.body.text
        })
    
        await comment.save();
    
        res.status(200).send("Comment added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("У вас ошибка в /api/commentaries");
    }
})


router.get('/api/commentaries', async (req, res) => {
    try {
        const commentaries = await Commentaries.find();
        res.json(commentaries);
    } 
    catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
})

router.put('/api/commentaries', async (req, res) => {
    const id = req.body.id;
    const state = req.body.action;
    
    try {
        if (state === 'delete') {
            const objectId = new mongoose.Types.ObjectId(id);
            await Commentaries.findOneAndDelete({ _id: objectId });
            res.json({ message: 'Комментарий успешно удален' });
        }
        else if (state === 'permitted') {
            await Commentaries.updateOne(
                { _id: id },
                { $set: { state: 'permitted' } }
            );
        }
    }
    catch (error) {
        console.error('Ошибка при изменении комментария', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
})

export default router;