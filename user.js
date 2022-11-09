const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 0,
        max: 100,
        validate:{
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`,
        }
    },
    email: {
        type:String,
        minLength:1,
        // required: true,
        lowerCase: true
    },
    createdAt: {
        type:Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type:Date,
        default: () => Date.now(),
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address:{
        street: String,
        city: String
    }
})

module.exports= mongoose.model("User", userSchema)