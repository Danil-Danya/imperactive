import TelegramBot from "node-telegram-bot-api";
require('dotenv').config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

export default function sendTelegrammMessage (message) {
    const chatId = process.env.CHAT;
    bot.sendMessage(chatId, message);
} 

