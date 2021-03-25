const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

var userSchema = new Schema({
    userId: {
        type: Number, 
        required: true, 
        unique: true
    },
    userName: {
        type: String        
    },
    strugglePeriod: {
        type: Number
    },
    sleepTime: {
        type: String
    },
    wakeTime: {
        type: String
    },
    step: {
        type: Number
    }
})

let connection = {}
connection.getUserModel = () => {
    return mongoose.connect("mongodb://localhost:27017/WysaDemo", { useNewUrlParser: true }).then((db) => {
        return db.model('User', userSchema)
    }).catch((err) => {
        console.log(err.message);
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}

module.exports = connection
