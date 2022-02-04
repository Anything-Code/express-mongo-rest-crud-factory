import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    phonenumber:{
        type: Number,
    },
    password:{
        type: String,
    },
    repassword:{
        type: String,
    },
    address: {
        type: String,
    }
});

const User = mongoose.model('user', UserSchema);

export default User;