const Joi = require("joi");
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.object(schema).validate(category);
}

exports.Category = Category;
exports.validate = validateCategory;
