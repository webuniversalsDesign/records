const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
   theater_id:String
})

const UserModel = mongoose.model("theaters", UserSchema)
module.exports = UserModel