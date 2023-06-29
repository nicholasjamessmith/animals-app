const mongoose = require('./connection')

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  habitat: { type: String, required: true },
  carnivore: Boolean
});

const Book = mongoose.model(`animal`, animalSchema);

module.exports = Animal;