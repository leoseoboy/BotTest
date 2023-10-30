const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на ваш токен бота, который вы получили у BotFather.
const token = '6436291008:AAF6CEgLr2GbnxGS2SOUs_Np7OoXSpxo2RI';

// Создайте экземпляр бота.
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start.
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я ваш Telegram-бот. Для начала работы введите /help.');
});

// Обработка команды /help.
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Я могу помочь вам с различными задачами. Просто напишите мне что-нибудь.');
});

// Обработка текстовых сообщений.
bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Отправляем ответное сообщение.
    bot.sendMessage(chatId, `Вы написали: "${text}"`);
});

// Обработка команды /stop.
bot.onText(/\/stop/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Пока! Для взаимодействия с ботом снова введите /start.');
});

// Обработка неопознанных команд и сообщений.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Извините, я не понимаю эту команду или сообщение. Введите /help для получения справки.');
});

// Запускаем бот.
bot.startPolling();
