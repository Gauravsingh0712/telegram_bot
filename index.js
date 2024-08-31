const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found, return -1
}
`;

try {
    bot.start((ctx) => ctx.reply('Welcome to Gaurav\'s Algo Bot'));// /start
    bot.command('binarysearch', (ctx) => ctx.reply(binarySearchString));// /binarysearch
    bot.command('toplinuxcommand', (ctx) => ctx.reply('ls pwd mkdir'))
    bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
    bot.on(message('text'), (ctx) => ctx.reply('I dont understand humans'));
    bot.launch();
} catch (error) {
    console.log("unexpected command")
}


