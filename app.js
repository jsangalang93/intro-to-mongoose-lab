
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const Schema = require('./models/schema.js')
const prompt = require('prompt-sync')();


const connect = async () => { 
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB');
    process.exit()
}

const username = prompt('What is your name?');
console.log(`Your name is ${username}`);
console.log(`Welcome to the CRM! What would you like to do? \n Please input the number correlating with your choice. \n 1. Create a new customer \n 2. View all customers \n 3. Update a customer \n 4. Delete a customer \n 5. Quit`)
const welcome = prompt(`Please input the number correlating with your choice.`) 
const postCustomer = async () => {
    if(welcome === `1`){
    const name = prompt(`What is the customers name?`)
    const age = prompt(`What is the customers age?`)
    const customerInfo = new Schema({
        name: name,
        age: age
    })
   
        await Schema.create(customerInfo)
        console.log(`Customer created!`)

    } else if (welcome === `2`){
        const All = await Schema.find({})
        console.log(`Here are all the customers:`, All)

    } else if (welcome === `3`){
        const All = await Schema.find({})
        console.log(`Here are all the customers: \n ${All}`)
        const UpdateId = prompt(`what is the ID of the customer you would like to update?`)
        await Schema.findByIdAndUpdate(
            UpdateId,
            { isComplete: true },
            { new: true },
        );
        const updateName = prompt(`What is the customers new name?`)
        const updateAge = prompt(`What is the customers new age?`)
        const customerInfo = Schema({
            updateName: updateName,
            updateAge: updateAge,
        })
        
    }
    
}


const runQueries = async () => {
    console.log('Queries running...');
    await postCustomer()
    console.log('Queries complete!');
}

connect()
