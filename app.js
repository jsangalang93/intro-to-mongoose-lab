const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const schema = require('./models/schema.js')


const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);

"Welcome to the CRM
What would you like to do?"

