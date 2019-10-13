const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", UserSchema);
