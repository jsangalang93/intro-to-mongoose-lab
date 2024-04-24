
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const Schema = require('./models/schema.js')
const prompt = require('prompt-sync')();
const username = prompt('What is your name?');
console.log(`Your name is ${username}`);

const connect = async () => { 
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB');
    process.exit()
}

console.log();(`Welcome to the CRM! What would you like to do? \n Please input the number correlating with your choice. \n 1. Create a new customer \n 2. View all customers \n 3. Update a customer \n 4. Delete a customer \n 5. Quit`)
const welcome = prompt(`Please input the number correlating with your choice.`) 
if(welcome === `1`){
const nameQuery = prompt(`What is the customers name?`)
}


const runQueries = async () => {
    console.log('Queries running...');
    // await createTodo()
    // await findTodos()
    // await deleteTodo()
    await updateTodo()

connect()
