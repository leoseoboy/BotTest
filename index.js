const TelegramApi = require('node-telegram-bot-api')
// const {gameOptions, againOptions} = require('./options')
// const sequelize = require('./db');
// const UserModel = require('./models');

const token = '6436291008:AAF6CEgLr2GbnxGS2SOUs_Np7OoXSpxo2RI'

const bot = new TelegramApi(token, {polling: true})

const chats = {}


bot.on('message', msg =>{
    const text = msg.text;
    const chatID = msg.chat.id;

    if (text.includes('Аня')) {
        bot.sendMessage(chatID, 'Сообщение содержит слово Аня');
    } else {
        bot.sendMessage(chatID, 'Сообщение не содержит слово Аня');
    }
})