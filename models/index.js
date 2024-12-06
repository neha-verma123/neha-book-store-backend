const mongoose = require("mongoose")

const db = async () => {
    const mongodb_link = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
    try {
        await mongoose.connect(mongodb_link, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("!!! Datebase is connected !!! => ", mongodb_link)
    } catch(error) {
        console.log("Error: ", error)
    }
}

module.exports = db

