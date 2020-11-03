const express = require(`express`)
const Recipe = require(`../models/recipes.js`)
const router = express.Router()

// routes

// index
router.get(`/`, (req, res) => {
    Recipe.find({}, (error, allRecipes) => {
        res.render(`recipe_book/index.ejs`, {
            recipes: allRecipes
        })
    })
})

// new
router.get(`/new`, (req, res) => {
    res.render(`recipe_book/new.ejs`)
})

// create
router.post(`/`, (req, res) => {
    Recipe.create(req.body, (error, createdRecipe) => {
        res.redirect(`/recipes`)
    })
})

// seed
router.get(`/seed`, (req, res) => {
    Recipe.create(
        [
           {
               name: `Curry`,
               calories: 500,
               ingredients: [`chicken`, `curry powder`, `rice`]
           },
           {
               name: `Spaghetti`,
               calories: 600,
               ingredients: [`pasta`, `sauce`, `ground beef`]
           },
           {
               name: `Chicken`,
               calories: 200,
               ingredients: [`chicken`, `marinade`]
           }
        ],
        (error, data) => {
            res.redirect(`/recipes`)
        }
    )
})