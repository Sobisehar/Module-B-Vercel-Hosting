import mongoose, { Mongoose } from 'mongoose'

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
})

const userModel = mongoose.model("userSign", schema)

export default userModel