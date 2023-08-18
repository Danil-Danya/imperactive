import express from "express";
import mongoose from "mongoose";
import path from "path";
import historyApiFallback from "connect-history-api-fallback";

import router from './router/router.js';

require('dotenv').config();

const app = express();


const PORT = process.env.PORT || 5000;
const dataBase = process.env.DATABASE;

app.use(historyApiFallback({
    rewrites: [
        {
          from: /^\/api\/.*$/,
          to: function(context) {
            return context.parsedUrl.path;
          }
        }
      ]
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

async function connectToDataBase () {
    try {
        await mongoose.connect(dataBase, {
            useNewUrlParser: true,
            //useFindAndModify: false
        })
    }
    catch (error) {
        console.log(error)
    }
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Приложение запущено на порту: ${PORT}`);
    console.log(`Просмотр сервера тут: http://localhost:${PORT}`);
});

connectToDataBase()