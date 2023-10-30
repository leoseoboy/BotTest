const TelegramBot = require('node-telegram-bot-api');
const OpenAI = require('openai');
const token = '6436291008:AAF6CEgLr2GbnxGS2SOUs_Np7OoXSpxo2RI';
const openai = new OpenAI({ apiKey: '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' });

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    openai.createCompletion({
        engine: 'text-davinci-003', // Используйте подходящую версию GPT-3
        prompt: text,
        max_tokens: 50, // Максимальное количество токенов в ответе
    })
        .then((response) => {
            const generatedText = response.choices[0].text;
            bot.sendMessage(chatId, generatedText);
        })
        .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Произошла ошибка при генерации текста.');
        });
})