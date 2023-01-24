const {Schema,userSchema,model} = require("../connection");
const myschema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        // encrypted
    },
    passwordCopy: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
    },
})

module.exports = model('user',userSchema);