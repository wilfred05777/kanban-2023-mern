const mongoose = require("mongoose");
const { schemaOptions } = require("./modelsOptions");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  // @ts-ignore
  schemaOptions
);

module.exports = mongoose.model("User", userSchema);
