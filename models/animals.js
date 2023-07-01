const mongoose = require('./connection')

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  habitat: { type: String, required: true },
  carnivore: Boolean,
  lifeExpectancy: { type: Number, required: true }
});

const Animal = mongoose.model(`animal`, animalSchema);

module.exports = Animal;