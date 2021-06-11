import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    des: String
})

const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel