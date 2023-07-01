require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const Animal = require('./models/animals');
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

//Routes
//Demo
app.get("/", (req, res) => {
  res.send("Hello World!")
})

//INDUCES: update, edit,

//Index
app.get("/animals", async (req, res) => {
  const allAnimals = await Animal.find({});
  res.render("index.ejs", { animals: allAnimals })
})

//New
app.get("/animals/new", (req, res) => {
  res.render("new.ejs")
})

//Create
app.post("/animals", async (req, res) => {
  //fit your data into the model before 'create'ing
  if (req.body.carnivore === 'on') {
    req.body.carnivore = true;
  } else {
    req.body.carnivore = false;
  }
  //*life expectancy number - *parse int, or plus sign*
  await Animal.create(req.body)
  res.redirect("/animals")
})

//Show
app.get("/animals/:id", async (req, res) => {
  const idAnimal = await Animal.findById(req.params.id)
  res.render("show.ejs", { animal: idAnimal })
})

//Destroy
app.delete('/animals/:id', async (req, res) => {
  await Animal.findByIdAndDelete(req.params.id)
  res.redirect('/animals')
})


//Update Route *parse int, plus sign, or 3rd option*

app.get('/animals/:id/edit', async (req, res) => {
  const animal = await Animal.findById(req.params.id)
  res.render('edit.ejs', { animal })
})

app.put('/animals/:id', async (req, res) => {
  if (req.body.carnivore === 'on') {
    req.body.carnivore = true;
  } else {
    req.body.carnivore = false;
  }

  await Animal.findByIdAndUpdate(req.params.id, req.body)

  res.redirect('/animals');
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})